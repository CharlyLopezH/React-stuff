import React, { useEffect, useState } from "react";



export const AccionBoton =({ buttonId, onCloseModal }) => {

    useEffect(() => {
        // Inicializa los tooltips usando Bootstrap desde el CDN
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        tooltipTriggerList.forEach(tooltipTriggerEl => {
          // Forzar TypeScript a tratar 'bootstrap' como any
          const bootstrap = (window as any).bootstrap;
          new bootstrap.Tooltip(tooltipTriggerEl);
        });
      }, []);
    return (
        <>
        
        <div>
            <h2>Haz cliqueado en el botón {buttonId}</h2>
            <p/>
            <code>Éste es el asistente que te guiará paso a paso</code>
            <code>Para realizar una Solicitud de Permiso de ausencia, click en siguiente para continuar. </code>
            
            <p>Botón: {buttonId}.</p>            
            <button 
            onClick={onCloseModal} 
            className="btn btn-secondary mt-3"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Este es un tooltip"
            >Cancelar</button>
         </div>
        
           
        </>
    )
}


