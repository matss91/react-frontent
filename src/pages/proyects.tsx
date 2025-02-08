import { Alert } from "../components/Alert";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";


const Proyects = () => {
const {alert}=useAuth()
  return (
   <>
   <h1 className="text-4xl font-black">proyectos</h1>
   {

alert.msg&&<Alert {...alert}></Alert>

   }
   <div className="bg-white shadow mt-10 rounded-lg">
      <Link to={"id"}>protecto de prueba</Link>
<p className="text-center text-gray-600 uppercase p-5">no hay proyectos aun</p>


   </div>
   
   
   
   
   
   </>
  )
}

export default Proyects
