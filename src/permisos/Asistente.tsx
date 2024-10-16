import React, { useState } from "react"
import { Paso0 } from "./pasosAsistente/Paso0";


export const Asistente=({ buttonId, onCloseModal })=>{

    const [step, setStep] = useState(1); // Estado para controlar el paso actual

  // Función para ir al siguiente paso
  const nextStep = () => {
    if (step < 4) {
      setStep(step + 1);
    }
  };

  // Función para ir al paso anterior
  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

    // Renderizar contenido basado en el paso actual
    const renderStepContent = () => {
        switch (step) {
          case 1:
            return <Paso0/>;
          case 2:
            return <p>Paso 2: Ingresa la fecha de inicio y fin del permiso.</p>;
          case 3:
            return <p>Paso 3: Adjunta documentos justificantes (si es necesario).</p>;
          case 4:
            return <p>Paso 4: Revisa y confirma los detalles de tu solicitud.</p>;
          default:
            return null;
        }
      };

    return(
        <>
    <div>
    <div className="bg-light p-1 d-inline-block rounded w-100 d-flex justify-content-center align-items-center">  Asistente
      <button className="btn-close ms-auto" type="button"  aria-label="Close" onClick={onCloseModal}  style={{ 
            //position: 'absolute', 
            top: '10px', 
            left: '10px', 
            fontSize: '1rem' 
          }}  ></button>             
     </div>     

      {/* Contenido del paso actual */}
      {renderStepContent()}

      {/* Controles del asistente */}
      <div className="mt-3">
        {step > 1 && (
          <button onClick={prevStep} className="btn btn-primary me-2" > <i className="bi bi-skip-start"></i></button>
        )}
        {step < 4 ? (
          <button onClick={nextStep} className="btn btn-primary" > <i className="bi bi-skip-end"></i>
            
          </button>
        ) : (
          <button onClick={onCloseModal} className="btn btn-success"> 
            Cancelar
          </button>
        )}
        <button onClick={onCloseModal} className="btn btn-secondary ms-3">
          Cancelar
        </button>
      </div>
    </div>
        </>
    )
}