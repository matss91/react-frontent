
import { Link } from "react-router-dom"
import{useForm}from"../hooks/useform"
import { FormEvent } from "react";

const Register = () => {

type FormValues = { [key: string]: string };

  const {formValues,handleInputChange,reset}=useForm({
    name:"",
    email:"",
    password:"",
    password2:""
  }as FormValues);
 const handleSubmit=async(e:FormEvent)=>{
e.preventDefault()
  console.log(formValues)
reset()
 }


  return (
    <>
    <h1 className="text-sky-500 font-black text-6xl capitalize"><span className="text-slate-700">crea tu cuenta</span></h1>
    <form onSubmit={handleSubmit} className="my-10 bg-white shadow rounded-lg p-10" >
    <div className="my-5">
      <label className="uppercase text-gray-600 block text-6xl font-bold" htmlFor='nombre'></label>
      <input onChange={handleInputChange} value={formValues.name} className="w-full mt-3 p-3 border rounded-xl bg-gray-50" id="nombre" type='text' placeholder='ingrese su nombre' autoComplete='off' name="name"></input>
    </div>
    <div className="my-5">
    <label className="uppercase text-gray-600 block text-xl font-bold" htmlFor='email'></label>
    <input onChange={handleInputChange} value={formValues.email} className="w-full mt-3 p-3 border rounded-xl bg-gray-50" id="email" type='email' placeholder='ingrese su email' name="email" ></input>
    </div>
    <div className="my-5">
    <label className="uppercase text-gray-600 block text-xl font-bold" htmlFor='password'></label>
      <input onChange={handleInputChange} value={formValues.password} className="w-full mt-3 p-3 border rounded-xl bg-gray-50" id="password" type='password' placeholder='ingrese su contrasenia' name="password" ></input>
      </div>

      <div>
    <label className="uppercase text-gray-600 block text-6xl font-bold" htmlFor='password2'></label>
      <input onChange={handleInputChange} value={formValues.password2} className="w-full mt-3 p-3 border rounded-xl bg-gray-50" id="password2" type='password' placeholder='ingrese su contrasenia' name="password2" ></input>
      </div>

      <button  className="bg-gray-700 mb-5 w-full py-3 text-white uppercase font-bold rounded  "  type="submit" >crear cuenta</button>
      </form>
      <nav><Link to="/">¿estas registrado? inicia sesion</Link></nav>
    </>
  )
}

export default Register
