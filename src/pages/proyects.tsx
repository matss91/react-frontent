import { Alert } from "../components/Alert";
import useAuth from "../hooks/useAuth";
import { ProyectCard } from "../components/ProyectCard";
import useProyect from "../hooks/useProyect";


const Proyects = () => {
const {alert}=useAuth()
const {proyects}=useProyect()

  return (
   <>
   <h1 className="text-4xl font-black">proyectos</h1>
   {

alert.msg&&<Alert {...alert}></Alert>

   }
   <div className="bg-white shadow mt-10 rounded-lg">
     

   {proyects.length ? 
  proyects.map(proyect => <ProyectCard key={proyect._id} proyect={proyect} ></ProyectCard>) 
  : <p>No projects available</p>}





   </div>
   
   
   
   
   
   </>
  )
}

export default Proyects
