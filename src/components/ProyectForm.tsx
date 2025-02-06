import useAuth from "../hooks/useAuth"
import {Alert}from"./Alert"

const ProyectForm = () => {
  const {alert}=useAuth()
  return (
    <form className="bg-white py-10 px-5 md:w-1/2 rounded-lg shadow">
{
alert.msg && <Alert {...alert}/>

}
<div className="mb-5">
  <label className="text-gray-700 uppercase font-bold text-sm" htmlFor="nombre">
    nombre del proyecto
</label>
<input id="nombre" type="text" className="border w-full p-2 mt-2 placeholder-gray-400 rounded-mg" placeholder="Nombre del proyecto">

</input>

</div>


<div className="mb-5">
  <label className="text-gray-700 uppercase font-bold text-sm" htmlFor="descripcion">
    Descripcion
</label>
<input id="descripcion" type="text" className="border w-full p-2 mt-2 placeholder-gray-400 rounded-mg" placeholder="Descripcion del proyecto">

</input>

</div>


<div className="mb-5">
  <label className="text-gray-700 uppercase font-bold text-sm" htmlFor="fechaEntrega">
    fecha de entrega
</label>
<input id="nombre" type="date" className="border w-full p-2 mt-2 placeholder-gray-400 rounded-mg" placeholder="fecha de entrega">

</input>



</div>



<div className="mb-5">
  <label className="text-gray-700 uppercase font-bold text-sm" htmlFor="cliente">
    nombre del cliente
</label>
<input id="cliente" type="text" className="border w-full p-2 mt-2 placeholder-gray-400 rounded-mg" placeholder="Nombre del cliente">

</input>

</div>



<input type="submit" value={"crear proyecto"} className="bg-sky-600 w-full p-3 uppercase font-bold text-white rounded cursor-pointer hover:bg-sky-700 transition-colors" ></input>




      
    </form>
  )
}

export default ProyectForm
