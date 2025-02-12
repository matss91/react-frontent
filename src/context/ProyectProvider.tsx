import {  createContext,PropsWithChildren, useState,useEffect } from "react";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import { clientAxios } from "../config/clientAxios";
export interface Proyect{
_id:string,
name:string,
description:string,
dateEspire:string,
client:string



}

export interface proyectsContextProps{
    name:string,
    description:string,
    dateEspire:string,
    client:string

}


export interface ProyectContextProps{
proyects:Proyect[],
proyect:Proyect,
loading:Boolean,
getProyect?:(id:string)=>void,
createProyect:(value:proyectsContextProps)=>void


}

const ProyectContext=createContext<ProyectContextProps>({}as ProyectContextProps)

const ProyectProvider=({children}:PropsWithChildren)=>{

const [proyects, setproyects] = useState<Proyect[]>([]);


const [proyect, setProyect] = useState<Proyect>({} as Proyect);

const [loading, setloading] = useState(false);

const {auth,handleShowAlert}=useAuth()
useEffect(() => {
    const getProyect=async()=>{
try {
    const token=localStorage.getItem("tokenPM")
    if(!token)return 

    const config={
headers:{
"Content-Type":"application-json",
Authorization:`Bearer ${token}`
}

}
const {data}=await clientAxios.get("/projects",config);
setProyect(data.projects)
console.log(data)

    
} catch (error) {
    console.log(error)
    if(error instanceof Error)handleShowAlert(axios.isAxiosError(error)?error.response?.data.msg:error.message)
}


    }
    getProyect()
    
}, [auth]);
const createProyect=async(value:proyectsContextProps)=>{

    try {
        const token=localStorage.getItem("tokenPM")
        if(!token)return 
    
        const config={
    headers:{
    "Content-Type":"aplication-json",
    Authorization:`Bearer ${token}`
    }
    
    }
    const {data}=await clientAxios.post("/projects",value,config);
    ///setProyect(data.projects)
    console.log(data)
    
} catch (error) {
    
}


}
return(<ProyectContext.Provider value={{proyects,proyect,loading,createProyect}}>{children}</ProyectContext.Provider>)
}

export{ProyectProvider}

export default ProyectContext