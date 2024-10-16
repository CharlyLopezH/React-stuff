import React from "react"

export const PantallaDummy=({ buttonId, onCloseModal })=>{
    return(
        <>
        <div>
            <h5>Pantalla Dummy, botón presionado: {buttonId}</h5>
            <p/>
            <hr/>            
            <button onClick={onCloseModal} className="btn btn-secondary mt-3">Cancelar</button>
         </div>
        </>
    )
}