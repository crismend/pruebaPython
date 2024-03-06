import { Navigate, useLocation } from "react-router-dom"


const PrivateRout = ({children}) => {

  const {state} =useLocation()

  return state?.logged ? children : <Navigate to='/' />
}

export default PrivateRout