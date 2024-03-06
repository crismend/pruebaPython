import { useState, useEffect } from "react";
import { createProductos, getCategory } from "../api/apiProductos";
import { getAllEmpresas } from "../api/apiEmpresa";

const FormProductos = () => {
  const [codigo, setCodigo] = useState('');
  const [nombre, setNombre] = useState('');
  const [caracteristicas, setCaracteristicas] = useState('');
  const [precio, setPrecio] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [empresas, setEmpresas] = useState([]);
  const [categoriasr, setCategoriasr] = useState([]);
  const [categorias, setCategorias] = useState('');
  const [error, setError] = useState('');

  const onChangePaciente = (e) => {
    if (e.target.name === 'codigo') {
      setCodigo(e.target.value);
    } else if (e.target.name === 'nombre') {
      setNombre(e.target.value);
    } else if (e.target.name === 'caracteristicas') {
      setCaracteristicas(e.target.value);
    } else if (e.target.name === 'precio') {
      setPrecio(e.target.value);
    } else if (e.target.name === 'empresa') {
      setEmpresa(e.target.value);
    } else if (e.target.name === 'categorias') {
      setCategorias(e.target.value);
    }
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    // Verificación de campos
    if (!codigo || !nombre || !caracteristicas || !precio || !empresa || !categorias) {
      setError('Todos los campos son obligatorios');
      return;
    }

    const productoData = {
      codigo,
      nombre,
      caracteristicas,
      precio,
      empresa,
      categorias: [parseInt(categorias)],
    };

    try {
      console.log('Datos del producto a enviar:', productoData);
      await createProductos(productoData);


  
      setCodigo('');
      setNombre('');
      setCaracteristicas('');
      setPrecio('');
      setEmpresa('');
      setCategorias('');
      setError('');
    } catch (error) {
      console.error('Error al enviar el producto:', error);

     
      setError('Error al enviar el producto. Por favor, intenta de nuevo.');
    }

  };

  useEffect(() => {
    // Obtener la lista de empresas al cargar el componente
    const fetchEmpresas = async () => {
      try {
        const response = await getAllEmpresas();
        setEmpresas(response.data);
      } catch (error) {
        console.error('Error al obtener empresas:', error);
      }
    };

    // Obtener la lista de categorías al cargar el componente
    const fetchCategorias = async () => {
      try {
        const response = await getCategory();
        if (response && response.data) {
          setCategoriasr(response.data);
        } else {
          console.error('Error al obtener categorías:', response);
        }
      } catch (error) {
        console.error('Error al obtener categorías:', error);
      }
    };


    fetchEmpresas();
    fetchCategorias();
  }, []);

  return (
    <div className="justify-center w-90 mx-5 ">
      <h2 className="font-black text-3xl text-center">Seguimiento Productos</h2>

      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mt-10"
        onSubmit={handleOnSubmit}
      >
        {error && (
          <div className="bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md">
            <p>{error}</p>
          </div>
        )}

        <div className="mb-5 w-full">
          <label htmlFor="codigo" className="block text-gray-700 uppercase font-bold">
            Codigo
          </label>
          <input
            name="codigo"
            id="codigo"
            type="text"
            placeholder="Registre el Codigo"
            className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={codigo}
            onChange={onChangePaciente}
          />
        </div>

        <div className="mb-5 w-full">
          <label htmlFor="nombre" className="block text-gray-700 uppercase font-bold">
            Nombre
          </label>
          <input
            name="nombre"
            id="nombre"
            type="text"
            placeholder="Registre el Nombre"
            className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={onChangePaciente}
          />
        </div>

        <div className="mb-5 w-full">
          <label htmlFor="caracteristicas" className="block text-gray-700 uppercase font-bold">
            Caracteristicas
          </label>
          <input
            name="caracteristicas"
            id="caracteristicas"
            type="text"
            placeholder="Registre las Caracteristicas"
            className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={caracteristicas}
            onChange={onChangePaciente}
          />
        </div>

        <div className="mb-5 w-full">
          <label htmlFor="precio" className="block text-gray-700 uppercase font-bold">
            Precio Pesos
          </label>
          <input
            name="precio"
            id="precio"
            type="number"
            placeholder="Registre el Precio"
            className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={precio}
            onChange={onChangePaciente}
          />
        </div>

        <div className="mb-5 w-full">
          <label htmlFor="empresa" className="block text-gray-700 uppercase font-bold">
            Empresa
          </label>
          <select
            name="empresa"
            id="empresa"
            className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={empresa}
            onChange={(e) => setEmpresa(e.target.value)}
          >
            <option value="" disabled>Selecciona una empresa</option>
            {empresas.map((emp) => (
              <option key={emp.nit} value={emp.nit}>
                {emp.nit}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-5 w-full">
          <label htmlFor="categoria" className="block text-gray-700 uppercase font-bold">
            Categoría
          </label>
          <select
            name="categorias"
            id="categoria"
            className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={categorias}
            onChange={(e) => setCategorias(e.target.value)}
          >
            <option value="" disabled>Selecciona una categoría</option>
            {categoriasr.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.id}
              </option>
            ))}
          </select>
        </div>

        <input
          className="border bg-orange-400 w-11/12 p-3 mt-3 text-white uppercase ml-2 hover:bg-orange-600 cursor-pointer transition-all rounded-md"
          type="submit"
          value="Agregar Producto"
        />
      </form>
    </div>
  );
};

export default FormProductos;