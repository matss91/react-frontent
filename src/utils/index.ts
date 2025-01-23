import Swal from "sweetalert2"

type icon="warning"|"error"|"success"|"info"|"question"

type showMessajeParams=
(title:string,
text:string,
icon?:icon)=>void



export const showMessajeResponse:showMessajeParams=(title,text,icon)=>{

Swal.fire({
icon,
title,
text

})

}