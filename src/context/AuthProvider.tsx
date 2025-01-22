import {  createContext, PropsWithChildren,useState } from "react";

export interface AuthContextProps{

auth:{
nombre?:string,
apellido?:string,
token?:string


},
alert:{msg:string};
handleShowAlert:(msg:string)=>void

}

const AuthContext=createContext<AuthContextProps>({} as AuthContextProps)

const AuthProvider=({children}:PropsWithChildren)=>{
const [alert, setalert] = useState({msg:""});

 const handleShowAlert=(msg:string)=>{
setalert({msg})
setTimeout(()=>{
    setalert({msg:""})
},3000)

}
return (
<AuthContext.Provider value={{auth:{nombre:"matias",apellido:"c",token:"un token"},alert,handleShowAlert}}>
    
    {children}
    
    </AuthContext.Provider>



)
    
}
export {AuthProvider}


export default AuthContext