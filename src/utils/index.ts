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


////////////////////////////////////






type Position= "top-end"| "center"| "center-start"| "center-end"|"bottom"|"bottom-start"|"bottom-end"

type ShowToastMessage=(title:string,position?:Position,icon?:icon)=>void



export const showToastMessage:ShowToastMessage=(title,position="top-end",icon="success")=>{

    
Swal.fire({
    title,
  position,
  icon,
  showConfirmButton: false,
  timer: 1500
});
}