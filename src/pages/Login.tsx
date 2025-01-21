import { Link } from "react-router-dom"

export const Login = () => {
  return (
    <>
    <h1 className="text-sky-600 font-black text-6xl capitalize"><span className="text-state-700">inicio sesion</span></h1>
    <form className="my-10 bg-white shadow rounded-lg p-10" action="">
    <div className="my-5">
      <label className="uppercase text-gray-600 block text-xl font-bold"  htmlFor='password'>correo electronico</label>
      <input className="w-full mt-3 p-3 border rounded-xl bg-gray-50" id="email" type="email" placeholder='ingrese email'></input>
    </div>
    <div className="py-5">
    <label className="uppercase text-gray-600 block text-xl font-bold" htmlFor='password'>contraseña</label>
    <input className="w-full mt-3 p-3 border rounded-xl bg-gray-50" id="password" type="password" placeholder='ingrese la contraseña'></input>
    </div>
    <button className="bg-gray-700 mb-5 w-full py-3 text-white uppercase font-bold rounded  "  type="submit">iniciar sesion</button>
    </form>
    <nav>
<Link to="/register">¿no tienes cuenta?registrate</Link>
<Link to="/forget-password">olvidastes tu password</Link>

    </nav>
    </>
  )
}


