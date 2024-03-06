import React, { useEffect, useState } from 'react'
import Lproductos from './Lproductos'
import { getAllProductos } from '../api/apiProductos'


const ListaDeProductos = () => {

  const [productosbak, setProductosbak] = useState([])

  useEffect(() => {

    const loadProductos = async () => {
      const res = await getAllProductos();
      setProductosbak(res.data)
    }
    loadProductos()
  }, [])


  return (
    <div className="h-screen overflow-scroll">
      <h2 className='font-black text-3xl text-center mb-10'>Listado de Productos</h2>

      {
        productosbak.map((produc) => (
          <Lproductos key={produc.codigo} 
          produc={produc} />
          ) )
      }



      
    </div>
    
  )
}

export default ListaDeProductos