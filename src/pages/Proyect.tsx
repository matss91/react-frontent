import { Link } from "react-router-dom"


const Proyect = () => {
  return (
    

<>
<div className="flex justify-between">
      <h1 className="font-black text-4xl ">{"proyecto"}</h1>
      {true && (
<div className="flex items-center gap-2 text-gray-400 hover:text-black">
<svg xmlns="http://www.w3.org.2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">

<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.23213.536 3.536m-2.36-5.036a2.5 2.5 0 113.536 3.536"></path>

</svg>

<Link to={"/Proyect/editar/:id"} className="uppercase font-bold">Editar</Link>
</div>
) }
</div>
  {true && (
<button type="button"
className="text-sm px-5 py-3 w-full md:w-auto rounded-lg uppercase font-bold bg-sky-400 text-white text-center mt-5 flex gap-2 items-center"
>
<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="current-color"></svg>

Nueva tarea

</button>



  ) } 
  <p className="font-bold text-xl mt-10">tareas de proyect</p>
 
 
  <div className="bg-white shadow mt-10 rounded-lg">
<p className="text-center my-5 p-10">no hay tareas en este proyect</p>
</div>
{true&&(
<>

<div className="flex items-center justify-between mt-10">

<p className="font-bold text-xl">Colaboradores</p>
<Link className="text-gray-400 hover:text-black uppercase font-bold" to={"/proyects/nuevo-colaborador/:idProyect"}>Añadir</Link>


</div>
<div className="bg-white swadow mt-10 rounded-lg">
<p className="text-center my-5 p-10">No hay colaboradores en este proyecto</p>
</div>



</>






)




}
</>




  
  )}
  


export default Proyect
