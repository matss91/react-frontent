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
loading:boolean,
signAut:()=>void

 }



 

const AuthContext=createContext<AuthContextProps>({} as AuthContextProps)

const AuthProvider=({children}:PropsWithChildren)=>{
const [alert, setalert] = useState({msg:""});
const [auth, setAuth] = useState({});
const [loading, setloading] = useState(true);


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
    
    setAuth({_id:data.user._id,
            name:data.user.name,
            email:data.user.email
    })
  console.log(auth)
} catch (error) {
    console.log(error)
    setAuth({})
}finally{
    setloading(false)
}
    }
    signin()
}, []);


const handleShowAlert=(msg:string)=>{
    setalert({msg})
    setTimeout(()=>{
        setalert({msg:""})
    },3000)
     }

     const signAut=()=>setAuth({})

return (
<AuthContext.Provider value={{auth,setAuth,alert,handleShowAlert,loading,signAut}}>
    
    {children}
    
    </AuthContext.Provider>



)
    
}
export {AuthProvider}


export default AuthContext