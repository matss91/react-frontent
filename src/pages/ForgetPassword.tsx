import { Link } from "react-router-dom"

export const ForgetPassword = () => {
  return (
   <>
  <h1 className="text-sky-600 font-black text-6xl capitalize"><span className="text-state-700">recupera tu acceso</span></h1>
   <form className="my-10 bg-white shadow rounded-lg p-10" action="">
   <div>
    <label className="uppercase text-gray-600 block text-xl font-bold" htmlFor='email'></label>
    <input className="w-full mt-3 p-3 border rounded-xl bg-gray-50" id="email" type='email' placeholder='ingrese su email' ></input>
    </div>

    <button className="bg-gray-700 mb-5 w-full py-3 text-white uppercase font-bold rounded  " type="submit" value="enviar instrucciones">Recuperar contraseña</button>
    </form>
    <nav>
      <Link to="/register">no tienes cuenta registrate</Link>
      <Link to="/">estas registrado inicia sesion</Link>
    </nav>
    </>
  )
}


