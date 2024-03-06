import { Route, Routes } from "react-router-dom"
import { NavBar } from "../NavBar"
import HomePage from "../pages/HomePage"
import LoginPage from "../pages/LoginPage"
import PrivateRout from "./PrivateRout"
import Empresas from "../pages/Empresas"
// import Inventario from "../pages/Inventario"



const AppRoutere = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />} >
          <Route index element={<HomePage />}/>
          <Route path="login" element={<LoginPage />}/>
          {/* <Route path="inventario" element={<Inventario />}/> */}
          <Route path="empresas" element={
          <PrivateRout>
            <Empresas />
          </PrivateRout>
          }/>
          
        </Route>
      </Routes>
    </>
  )
}

export default AppRoutere