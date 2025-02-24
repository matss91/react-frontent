import ProyectContext from "../context/ProyectProvider"
import { useContext } from "react"
 const useProyect=()=>{


    return useContext(ProyectContext)
}

export default useProyect