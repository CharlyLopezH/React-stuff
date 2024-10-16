import React, { useState } from "react";



export const AccionBoton =({ buttonId, onCloseModal }) => {

    return (


        <>
        
        <div>
            <h2>Haz cliqueado en el botón {buttonId}</h2>
            <p/>
            <code>Éste es el asistente que te guiará paso a paso</code>
            <code>Para realizar una Solicitud de Permiso de ausencia </code>
            
            <p>Botón: {buttonId}.</p>            
            <button onClick={onCloseModal} className="btn btn-secondary mt-3">Cancelar</button>
         </div>
        
           
        </>
    )
}


