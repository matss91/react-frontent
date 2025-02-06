import {  createContext, PropsWithChildren,useEffect,useState } from "react";
import { clientAxios } from "../config/clientAxios";


interface Auth{
    _id?:string,
    name?:string,
    email?:string,

}

export interface AuthContextProps{

auth:Auth;
setAuth:React.Dispatch<React.SetStateAction<Auth>>
alert:{
    msg:string
};
handleShowAlert:(msg:string)=>void,
loading:boolean
 }



 

const AuthContext=createContext<AuthContextProps>({} as AuthContextProps)

const AuthProvider=({children}:PropsWithChildren)=>{
const [alert, setalert] = useState({msg:""});
const [auth, setAuth] = useState({});
const [loading, setloading] = useState(false);
 const handleShowAlert=(msg:string)=>{
setalert({msg})
setTimeout(()=>{
    setalert({msg:""})
},3000)
 }
useEffect(() => {
    
    const signin=async()=>{
const token=localStorage.getItem("tokenPM")
console.log(token)

if(!token){
setloading(false)
return null


}
try {
    const {data}=await clientAxios.get("/profile",{headers:{
"Content-Type":"application/json",
authorization:`Bearer ${token}`




    }})
    setAuth(data)
    console.log(data)
} catch (error) {
    console.log(error)
    setAuth({})
}finally{
    setloading(false)
}
    }
    signin()
}, []);


return (
<AuthContext.Provider value={{auth,setAuth,alert,handleShowAlert,loading}}>
    
    {children}
    
    </AuthContext.Provider>



)
    
}
export {AuthProvider}


export default AuthContext