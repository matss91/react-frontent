
import { Link, useParams } from "react-router-dom"
import { useEffect } from "react";

import { clientAxios } from "../config/clientAxios";
export const ConfirmAccount = () => {
  const {token}=useParams()

  useEffect(() => {
    const ConfirmAccount=async()=>{
try {
  const responseAxios=await clientAxios.get(`checked?token=${token}`)
  console.log(responseAxios)
} catch (error) {
  console.log(error)
}

    }
    
ConfirmAccount()
    return () => {
      
    };
  }, []);
  return (
    <>
    <h1>confirma tu cuenta </h1>
    <div>
      
      
      
      <nav>
      <Link to="/">¿estas registrado? inicia sesion</Link>
      <Link to="/register">¿no tienes cuenta?registrate</Link>
      </nav>
      </div>    
    </>
  )
}


