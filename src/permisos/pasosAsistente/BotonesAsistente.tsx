//Control de los botones del asistente ¿cuántos botones debo poner??
import React, { useState } from "react";

export const BotonesAsistente=({ onCloseModal, totalPasos }  )=>{

    const [step, setStep] = useState(1); // Estado para controlar el paso actual
    const [maxSteps, setMaxSteps] = useState(totalPasos); //Variable para saber la cantidad de pasos del asistente
     

    const prevStep=()=> {
        console.log("Regresar 1 paso...");
        setStep(step-1);
    }

    const nextStep=()=> {
        //console.log("Function siguienteStep not implemented.");
        setStep(step+1);
    }

    const enviar=()=> {
        console.log("Function enviar not implemented.");
    }

    return(
        <>
         {/* Controles del asistente */}         
         <div className="bg-light p-1 d-inline-block w-100 d-flex justify-content-center align-items-center border-top border-bottom border-gray p-1 mt-1">
          <button
            onClick={prevStep}
            className="btn btn-primary me-2"
            disabled={true}
            hidden={true}
          >
            <i className="bi bi-skip-start"></i>
          </button>
          <button
            onClick={nextStep}
            className="btn btn-primary me-2"            
            disabled={step > totalPasos }
          >
            <i className="bi bi-skip-end"></i>
          </button>

          <button
            onClick={enviar}
            className="btn btn-success me-2"
            hidden={step !== maxSteps}
            //disabled={true}            
          >
            <i className="bi bi-send-check"></i>
          </button>

          <button onClick={onCloseModal} className="btn btn-secondary ms-3">
            Cerrar
          </button>
        </div>

        </>
    );
}