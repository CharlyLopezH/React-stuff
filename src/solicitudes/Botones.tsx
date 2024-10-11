import React from "react"

export const Botones=()=>{
 
    return (
    <>
    <div className= "bg-light p-1 d-inline-block w-100 d-flex justify-content-center align-items-center border-top border-bottom border-dark p-1">
    <button type="button" className="btn btn-primary me-1"> <i className="bi bi-info-circle me-1"></i> Días Solicitados</button>    
    <button type="button" className="btn btn-success me-1"> <i className="bi bi-send me-1"></i> Enviar</button>
    <button type="button" className="btn btn-danger me-1"> <i className="bi bi-life-preserver me-1"></i> Guardar</button>
    <button type="button" className="btn btn-info me-1"> <i className="bi bi-bootstrap-reboot"></i> Reiniciar</button>    
    </div>
        </>
    )
}