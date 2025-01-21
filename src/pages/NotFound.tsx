
import {Link}from"react-router-dom"
export const NotFound = () => {
  return (
    <div>
     <h1 className="text-sky-500 font-black text-6xl capitalize"><span className="text-slate-700">404 not found</span></h1>
    <nav>
      <Link className="block text-center my-5 text-slate-500 uppercase text-sm" to="/">volver al inicio</Link>
    </nav>
    
    </div>
  )
}


