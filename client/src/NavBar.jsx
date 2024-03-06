import React from 'react'
import { Link, NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'


export const NavBar = () => {

  const { state } = useLocation();
  const navigate = useNavigate();

  const onLogout= () => {
    navigate('/', {
      replace: true,
    })
  }



  return (
    <>
      <header>

        <h1>
          <Link to='/'>LiteThinking</Link>
        </h1>

        {
          state?.logged ? (
            
            <div className='user'>
              {/* <Link to="inventario">Inventario</Link> */}
              <span className='username'>{state?.name}</span>
              <button className='btn-logout' onClick={onLogout}>Cerrar Sesion</button>
              
            </div>
            
          ) : (
            <nav>
              <Link to='login' >Iniciar Sesion</Link>
            </nav>
          )
        }
      </header>
      <Outlet />
    </>
  )
}
