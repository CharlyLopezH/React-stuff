import React from "react"
import { BotonesMenu } from "./BotonesMenu"
import { GrupoBotones } from "./GrupoBotones"
import { TablaSolicitudesDummy } from "./TablaSolicitudesDummy"

//ejemplo de como manejar un menú de botones con llamado a una ventana modal

export const SolicitudPermiso=()=>{
    return (
        <>        
        <div className="class container">
        <h3>Trámite de Permisos</h3>
        <code>Prototipo para la Solicitud Electrónica de Permisos</code>
        
        <hr className="mb-1"/>

        <div className="bg-info p-1 d-inline-block rounded w-100 d-flex justify-content-center align-items-center">
        <span className="text-dark">Bienvenido Solicitante: 396</span> -
        <span className="fw-bold text-white">Fulanito de Tal.</span>        
       </div>

      <p/>
      <div style={{ textAlign: 'left' }}>Solicitudes Previas</div>

      <hr/>

       <TablaSolicitudesDummy/>
       <hr/>

        <code>Haz clic en los botones y sigue las indicaciones</code>        
        {/* <BotonesMenu/>         */}
        <GrupoBotones/>
        </div>
        </>
    )
}