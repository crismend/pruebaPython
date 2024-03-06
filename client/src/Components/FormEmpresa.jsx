import React, { useState } from 'react'
import { createEmpresas } from '../api/apiEmpresa'

const FormEmpresa = () => {

  const [nit, setNit] = useState('')
  const [nombre, setNombre] = useState('')
  const [direccion, setDireccion] = useState('')
  const [telefono, setTelefono] = useState('')

  const [error, setError] = useState(false)

  const onChangePaciente = (e) => {
    if (e.target.name === 'nit') {
      setNit(e.target.value)
    } else if (e.target.name === 'nombre') {
      setNombre(e.target.value)
    } else if (e.target.name === 'direccion') {
      setDireccion(e.target.value)
    } else if (e.target.name === 'tel') {
      setTelefono(e.target.value)
    }
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault();
  
    // Verificacion de campos
    if (!nit || !nombre || !direccion || !telefono) {
      setError(true);
      return;
    }
  
    // Crea un objeto con la información del formulario
    const empresaData = {
      nit,
      nombre,
      direccion,
      telefono,
    };
  
    try {
      // Llama a la función para enviar la información al backend
      await createEmpresas(empresaData);
  
      // Puedes realizar alguna acción adicional después de enviar los datos, si es necesario
  
      // Limpiar el formulario y errores después de un envío exitoso
      setNit('');
      setNombre('');
      setDireccion('');
      setTelefono('');
      setError(false);
    } catch (error) {
      console.error('Error al enviar la empresa:', error);
  
      
    }
  };





  return (
    <div className="justify-center w-90 mx-5 ">
      <h2 className="font-black text-3xl text-center">Seguimiento Empresas</h2>


      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mt-10"
        onSubmit={handleOnSubmit}
      >


        {
          error &&
          <div className="bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md">
            <p>Todos lo campos son obligatorios</p>
          </div>
        }


        <div className="mb-5 w-full">
          <label htmlFor="nit" className="block text-gray-700 uppercase font-bold">
            Nit
          </label>
          <input
            name="nit"
            id="nit"
            type="text"
            placeholder="Registre el Nit"
            className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nit}
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
            placeholder="Registre el Nit"
            className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={onChangePaciente}
          />
        </div>

        <div className="mb-5 w-full">
          <label htmlFor="direccion" className="block text-gray-700 uppercase font-bold">
            Direccion
          </label>
          <input
            name="direccion"
            id="direccion"
            type="text"
            placeholder="Registre el Nit"
            className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={direccion}
            onChange={onChangePaciente}
          />
        </div>

        <div className="mb-5 w-full">
          <label htmlFor="tel" className="block text-gray-700 uppercase font-bold">
            Telefono
          </label>
          <input
            name="tel"
            id="tel"
            type="tel"
            placeholder="Registre el Nit"
            className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={telefono}
            onChange={onChangePaciente}
          />
        </div>


        <input
          className="border bg-orange-400 w-11/12 p-3 mt-3 text-white uppercase ml-2 hover:bg-orange-600 cursor-pointer transition-all rounded-md"
          type="submit"
          value={'Agregar Empresa'}
        />
      </form>
    </div>
  )
}



export default FormEmpresa