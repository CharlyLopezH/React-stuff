import React from "react"
import { Saludo } from "./Saludo"
import { Tabla } from "./Tabla"
import { Botones } from "./Botones"

export const CrearSolicitud = ()=> {
    return(
    <>
    <div className="container">
        <h2>Crear Solicitud</h2>
        <code>Módulo para realizar el trámite de Solicitud de Permisos</code>
        <hr/>
        <Saludo/>
  <hr/>
        <Tabla/>
        <Botones/>
    </div>
    </>    
         )
}