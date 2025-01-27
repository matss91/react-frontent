
import './App.css'
import { AuthProvider } from './context/AuthProvider'
import {Route,Routes}from"react-router-dom"
import {Authlayout}from"./layouts/AuthLayout"
import {Login}from"./pages/Login"
import {NotFound}from"./pages/NotFound"
import {ForgetPassword}from"./pages/ForgetPassword"
import Register from './pages/Register'

function App() {
  

  return (
   <AuthProvider>
<Routes >



<Route path="/"  element={< Authlayout/>}></Route>
<Route index  element={< Login/>}></Route>
<Route path="/register" element={<Register/>}></Route>
<Route path="forget-password" element={<ForgetPassword/>}></Route>
<Route path="*" element={<NotFound/>}></Route>


</Routes>

   </AuthProvider>
  )
}

export default App
