import { useEffect, useState } from "react"
import { getAllInventario, deleteInventario } from "../api/apiInventario"


const Inventario = () => {


  const [inventario, setInventario] = useState([])

  useEffect(() => {
    const loadInventario = async () => {
      const res = await getAllInventario();
      setInventario(res.data)
    }
    loadInventario()
  }, [])

  const handleDelete = async(id) =>  {
    const accepted = window.confirm("estas seguro de eliminar este item");
    if (accepted) {
      await deleteInventario(id)
    }
  }

  return (
    <>
      <h2 className='font-black text-3xl text-center mb-10'>INVENTARIO</h2>
    <div className="w-full mx-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="border-b px-4 py-2 text-center">ID</th>
            <th className="border-b px-4 py-2 text-center">Cantidad</th>
            <th className="border-b px-4 py-2 text-center">Producto</th>
            <th className="border-b px-4 py-2 text-center">Empresa</th>
            <th className="border-b px-4 py-2 text-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {inventario.map((invent) => (
            <tr key={invent.id}>
              <td className="border-b px-4 py-2 text-center">{invent.id}</td>
              <td className="border-b px-4 py-2 text-center">{invent.cantidad}</td>
              <td className="border-b px-4 py-2 text-center">{invent.producto}</td>
              <td className="border-b px-4 py-2 text-center">{invent.empresa}</td>
              <td className="border-b px-4 py-2 text-center">
                {/* <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded"
                  onClick={() => handleEdit(invent.id)}
                >
                  Editar
                </button> */}
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleDelete(invent.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    </>
  )
}

export default Inventario