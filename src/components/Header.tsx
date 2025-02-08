import { Link } from "react-router-dom"
import useAuth from "../hooks/useAuth"

const Header = () => {
  const {signAut}=useAuth()
const  handleSignAut=()=>{
  signAut()
localStorage.removeItem("tokenPM")

  }


  return (
    <header>
      <div className="md:flex md:justify-between">
 <h2 className="text-4xl text-sky-600 font-black text-center  mb-5 md:mb-0">proyect manager</h2>
<div className="flex flex-col md:flex-row items-center gap-4">
<button type="button" className="font-bold uppercase">buscar proyecto</button>
<Link  to="/proyectos" className="font-bold uppercase">proyectos</Link>
<button onClick={handleSignAut} type="button" className="text-white text-sm bg-sky-600 p-3 rounded-md uppercase font-bold">cerrar sesion</button>

</div>




</div>


    </header>
  )
}

export default Header
