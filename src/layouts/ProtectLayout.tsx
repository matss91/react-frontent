import useAuth from "../hooks/useAuth"
import { Navigate, Outlet } from "react-router-dom"
import Header from "../components/Header"
import SideBar from "../components/SideBar"
const ProtectLayout = () => {
    const {auth,loading}=useAuth()
    if(loading)return "cargando..."
  return (
   <>
   {auth.name?(

<div className="bg-gray-100">
<Header/>
<div className="md:flex md:min-h-screen ">
<SideBar/>

<main className="p-10 flex-1">
<Outlet/>

</main>

</div>
</div>


   ):<Navigate to="/" />}


   
   
   
   </>
  )
}

export default ProtectLayout
