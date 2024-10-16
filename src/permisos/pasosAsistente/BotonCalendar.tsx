import React, { useState } from "react"
//import { SelectorFechas2 } from "./SelectorFechas2";


export const BotonCalendar=()=> {
    const [mostrarComponente, setMostrarComponente] = useState(false);
    
    const handleClick = () => {
        //alert('¡Botón clicado!'); // Acción al hacer clic en el botón
        console.log('Botón clicado, llamar al componente con el calendario');
        setMostrarComponente((prevState) => !prevState);
      };

    return(
        <>
        <span>
            <button 
             onClick={handleClick} type="button" className="btn btn-light me-1"> <i className="bi bi-calendar-week me-1"></i>
            </button>
            </span>
        {/* {mostrarComponente && <SelectorFechas2 />} */}
        </>
    )
}


