import React from 'react'

const Lproductos = ({produc}) => {

  return (
    <div className=' mt-3 bg-white shadow-md px-5 py-7 rounded-xl'>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Codidgo: {""}
        <span className='font-normal normal-case '>{produc.codigo}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: {""}
        <span className='font-normal normal-case '>{produc.nombre}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Caracteristicas: {""}
        <span className='font-normal normal-case '>{produc.caracteristicas}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Precio: {""}
        <span className='font-normal normal-case '>{produc.precio}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Empresa: {""}
        <span className='font-normal normal-case '>{produc.empresa}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Categoria: {""}
        <span className='font-normal normal-case '>{produc.categorias}</span>
        </p>

        <div className="flex justify-between mt-10">
      <button 
      type="button"
      className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"

      >
        Editar
      </button>

      <button 
      type="button"
      className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"

      >
        Eliminar
      </button>
    </div>


      </div>
  )
}

export default Lproductos