import {  createContext, PropsWithChildren } from "react";

export interface AuthContextProps{

auth:{
nombre?:string,
apellido?:string,
token?:string


}

}

const AuthContext=createContext<AuthContextProps>({} as AuthContextProps)

const AuthProvider=({children}:PropsWithChildren)=>{

return (
<AuthContext.Provider value={{auth:{nombre:"matias",apellido:"c",token:"un token"}}}>
    
    {children}
    
    </AuthContext.Provider>



)
    
}
export {AuthProvider}


export default AuthContext