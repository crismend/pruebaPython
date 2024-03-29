import React from 'react'

export const Lempresa = ({empre}) => {
  return (
    <div className=' mt-3 bg-white shadow-md px-5 py-7 rounded-xl'>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Nit: {""}
        <span className='font-normal normal-case '>{empre.nit}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: {""}
        <span className='font-normal normal-case '>{empre.nombre}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Direccion: {""}
        <span className='font-normal normal-case '>{empre.direccion}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Telefono: {""}
        <span className='font-normal normal-case '>{empre.tel}</span>
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
