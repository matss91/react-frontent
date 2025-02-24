
import { Link, useNavigate, useParams } from "react-router-dom"
import { useEffect, useContext } from "react";
import axios from "axios";
import { Alert } from "../components/Alert";
import AuthContext from "../context/AuthProvider";

import { clientAxios } from "../config/clientAxios";
import { showMessajeResponse } from "../utils";
export const ConfirmAccount = () => {
  const {token}=useParams()
  const navigate=useNavigate()
  const {alert,handleShowAlert}=useContext(AuthContext)
  useEffect(() => {
    const ConfirmAccount=async()=>{
try {
  const responseAxios=await clientAxios.get(`checked?token=${token}`)
 showMessajeResponse("cuenta confirmada",responseAxios.data.msg,"success")
 navigate("/")

} catch (error) {
  console.log(error)
  handleShowAlert(axios.isAxiosError(error)?error.response?.data.msg:error)
}

    }
    
ConfirmAccount()
    return () => {
      
    };
  }, []);
  return (
    <>
    <h1>confirma tu cuenta </h1>
     {alert.msg&&<Alert {...alert}></Alert>}
    <div>
      
      
      
      <nav>
      <Link to="/">¿estas registrado? inicia sesion</Link>
      <Link to="/register">¿no tienes cuenta?registrate</Link>
      </nav>
      </div>    
    </>
  )
}


