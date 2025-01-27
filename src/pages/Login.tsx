import { Link } from "react-router-dom"
import{useForm}from"../hooks/useform"
import { FormEvent,useContext } from "react";
import AuthContext from "../context/AuthProvider";
import { Alert } from "../components/Alert";

import { clientAxios } from "../config/clientAxios";
export interface FormLoginValues{
  
  email:string;
  password:string;
 
}
export const Login = () => {
  const egRegEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}/;
  const {alert,handleShowAlert}=useContext(AuthContext)
  const {formValues,handleInputChange,reset}=useForm<FormLoginValues>({
   
    email:"",
    password:"",
   
  });

  const {email,password}=formValues
const handleSubmit=async(e:FormEvent)=>{
e.preventDefault()
if([formValues.email,formValues.password].includes("")){
  handleShowAlert("todos los campos son obligatorios")
  return null
 }

 if(!egRegEmail.test(formValues.email)){
  handleShowAlert("formato de email no valido")
return null
}

try {

 const responseAxios= await clientAxios.post("/login",{email,password})
 console.log(responseAxios)
} catch (error) {
  console.log(error)
  //handleShowAlert(axios.isAxiosError(error)?error.message?.data.msg:error)
}
reset()

}
  return (
    <>
    <h1 className="text-sky-600 font-black text-6xl capitalize"><span className="text-state-700">inicio sesion</span></h1>
       {alert.msg&&<Alert {...alert}></Alert>}
    <form method="POST" onSubmit={handleSubmit} className="my-10 bg-white shadow rounded-lg p-10" action="">
    <div className="my-5">
      <label className="uppercase text-gray-600 block text-xl font-bold"  htmlFor='password'>correo electronico</label>
      <input value={formValues.email} name="email" onChange={handleInputChange} className="w-full mt-3 p-3 border rounded-xl bg-gray-50" id="email" type="email" placeholder='ingrese email'></input>
    </div>
    <div className="py-5">
    <label className="uppercase text-gray-600 block text-xl font-bold" htmlFor='password'>contraseña</label>
    <input value={formValues.password} name="password" onChange={handleInputChange} className="w-full mt-3 p-3 border rounded-xl bg-gray-50" id="password" type="password" placeholder='ingrese la contraseña'></input>
    </div>
    <button className="bg-gray-700 mb-5 w-full py-3 text-white uppercase font-bold rounded  "  type="submit">iniciar sesion</button>
    </form>
    <nav>
<Link to="/register">¿no tienes cuenta?registrate</Link>
<Link to="/forget-password">olvidastes tu password</Link>

    </nav>
    </>
  )
}


