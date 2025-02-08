import ProyectForm from"../components/ProyectForm"

const ProyectEdit = () => {
  return (
    <>
    <div className="flex justify-between">
        <h1 className="font-black text-4xl">Editar proyecto</h1>
       
       
        <div className="flex items-center gap-2 text-gray-400 hover:text-black">
<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">

<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 71-.867 12.142A2 2 0 0116.138 21H7-862a2 2 0 01-1.999" >
</path>

</svg>

<button className="mt-10 flex justify-center">
    <ProyectForm></ProyectForm>


</button>


        </div>
     
    </div>
     </>
  )
}

export default ProyectEdit
