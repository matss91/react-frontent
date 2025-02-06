
import './App.css'
import { AuthProvider } from './context/AuthProvider'
import {Route,Routes}from"react-router-dom"
import {Authlayout}from"./layouts/AuthLayout"
import {Login}from"./pages/Login"
import {NotFound}from"./pages/NotFound"
import {ForgetPassword}from"./pages/ForgetPassword"
import Register from './pages/Register'
import { ConfirmAccount } from './pages/ConfirmAccount'
import ProtectLayout from './layouts/ProtectLayout'
function App() {
  

  return (
   <AuthProvider>
<Routes >



<Route path="/"  element={< Authlayout/>}>
<Route index  element={< Login/>}></Route>
<Route path="/register" element={<Register/>}></Route>
<Route path="/confirmar/:token" element={< ConfirmAccount></ConfirmAccount>}></Route>
<Route path="forget-password" element={<ForgetPassword/>}></Route>
<Route path="*" element={<NotFound/>}></Route>
</Route>
<Route path="/proyectos" element={<ProtectLayout/>}>


</Route>

</Routes>

   </AuthProvider>
  )
}

export default App
