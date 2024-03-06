import React, { useEffect, useState } from 'react'
import { Lempresa } from './Lempresa'
import { getAllEmpresas } from '../api/apiEmpresa'


const ListasDeEmpresas = () => {

  const [empresabak, setEmpresabak] = useState([])

  useEffect(() => {

    const loadEmpresa = async () => {
      const res = await getAllEmpresas();
      setEmpresabak(res.data)
    }
    loadEmpresa()
  }, [])



  return (
    <div className="h-screen overflow-scroll">
      <h2 className='font-black text-3xl text-center mb-10'>Listado de Empresaas</h2>

      {
        empresabak.map((empresa) => (
          <Lempresa key={empresa.nit}
            empre={empresa}
          />
        ))
      }




    </div>
  )
}

export default ListasDeEmpresas