import {  createContext, PropsWithChildren,useState } from "react";


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
handleShowAlert:(msg:string)=>void
 }



 

const AuthContext=createContext<AuthContextProps>({} as AuthContextProps)

const AuthProvider=({children}:PropsWithChildren)=>{
const [alert, setalert] = useState({msg:""});
const [auth, setAuth] = useState({});
 const handleShowAlert=(msg:string)=>{
setalert({msg})
setTimeout(()=>{
    setalert({msg:""})
},3000)

}
return (
<AuthContext.Provider value={{auth,setAuth,alert,handleShowAlert}}>
    
    {children}
    
    </AuthContext.Provider>



)
    
}
export {AuthProvider}


export default AuthContext