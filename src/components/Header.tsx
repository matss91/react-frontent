import { Link } from "react-router-dom"

const Header = () => {

  handleCerrarSesion=()=>{
localStorage.removeItem("token")

  }


  return (
    <header>
      <div className="md:flex md:justify-between">
 <h2 className="text-4xl text-sky-600 font-black text-center  mb-5 md:mb-0">proyect manager</h2>
<div className="flex flex-col md:flex-row items-center gap-4">
<button type="button" className="font-bold uppercase">buscar proyecto</button>
<Link  to="/proyectos" className="font-bold uppercase"></Link>
<button type="button" className="text-white text-sm bg-sky-600 p-3 rounded-md uppercase font-bold"></button>

</div>




</div>


    </header>
  )
}

export default Header
