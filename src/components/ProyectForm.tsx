import useAuth from "../hooks/useAuth"
import {Alert}from"./Alert"
import {proyectsContextProps}from"../context/ProyectProvider"
import { useForm } from "../hooks/useform"
import axios from "axios";
import { FormEvent } from "react";
import useProyect from "../hooks/useProyect";

const ProyectForm = () => {
  const {alert}=useAuth()
  const {handleShowAlert}=useAuth()
  const {createProyect}=useProyect()
  const {handleInputChange,formValues,reset}= useForm<proyectsContextProps>({
    name:"",
    description:"",
    dateEspire:"",
    client:""
    
    
      })

const {name,description,dateEspire,client}=formValues


const handleSubmit=async(e:FormEvent)=>{
e.preventDefault()
try {
  if([name,description,dateEspire,client].includes("")) throw new Error("todos los campos son obligatorios")
    const now=new Date()
  if(new Date(dateEspire).getTime()<now.getTime()) throw new Error("la fecha de entrega no puede ser menor a la fecha actual")
console.log(formValues)
 createProyect(formValues)
  } catch (error) {
  if(error instanceof Error)handleShowAlert(axios.isAxiosError(error)?error.response?.data.msg:error.message)





    reset()

  }

}
  return (
    <form onSubmit={handleSubmit} className="bg-white py-10 px-5 md:w-1/2 rounded-lg shadow">
{
alert.msg && <Alert {...alert}/>

}
<div className="mb-5">
  <label className="text-gray-700 uppercase font-bold text-sm" htmlFor="nombre">
    nombre del proyecto
</label>
<input name="name" value={name} onChange={handleInputChange} id="nombre" type="text" className="border w-full p-2 mt-2 placeholder-gray-400 rounded-mg" placeholder="Nombre del proyecto">

</input>

</div>


<div className="mb-5">
  <label className="text-gray-700 uppercase font-bold text-sm" htmlFor="descripcion">
    Descripcion
</label>
<input name="description" value={description} onChange={handleInputChange} id="descripcion" type="text" className="border w-full p-2 mt-2 placeholder-gray-400 rounded-mg" placeholder="Descripcion del proyecto">

</input>

</div>


<div className="mb-5">
  <label className="text-gray-700 uppercase font-bold text-sm" htmlFor="fechaEntrega">
    fecha de entrega
</label>
<input name="dateEspire" value={dateEspire} onChange={handleInputChange} id="nombre" type="date" className="border w-full p-2 mt-2 placeholder-gray-400 rounded-mg" placeholder="fecha de entrega">

</input>



</div>



<div className="mb-5">
  <label className="text-gray-700 uppercase font-bold text-sm" htmlFor="cliente">
    nombre del cliente
</label>
<input name="client" value={client} onChange={handleInputChange} id="cliente" type="text" className="border w-full p-2 mt-2 placeholder-gray-400 rounded-mg" placeholder="Nombre del cliente">

</input>

</div>



<input type="submit" value={"crear proyecto"} className="bg-sky-600 w-full p-3 uppercase font-bold text-white rounded cursor-pointer hover:bg-sky-700 transition-colors" ></input>




      
    </form>
  )
}

export default ProyectForm
