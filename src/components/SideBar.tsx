import { Link } from "react-router-dom"
import useAuth from "../hooks/useAuth"


const SideBar = () => {
    const {auth}=useAuth()
  return (
    <aside className="ml:w-1/3 lg:w-1/5 xl:w-1/6 px-5 py-10">
<p className="text-xl font-bold">hola:{auth.name}</p>
<Link to="crear-proyecto" className="bg-sky-600 w-full p-3 text-white uppercase font-bold block mt-5 text-center rounded-lg"></Link>



    </aside>
  )
}

export default SideBar
