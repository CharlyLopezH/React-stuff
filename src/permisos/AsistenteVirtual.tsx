//Este es un asistente virtual dinámico para la creación de una solicitud
//en función de los conceptos requeridos el asistente le guiará en el proceso al usuario
//aplicando las políticas establecidas en el reglamento
import React, { useState } from "react";
import { PasoActivoPage } from "./PasoActivoPage";

export const AsistenteVirtual=({ buttonId, onCloseModal, totalPasos, arregloConceptos})=>{

    const [step, setStep] = useState(1); // Estado para controlar el paso actual       
    //console.log(`Item Hardcodeado [0] ${arregloConceptos[0]}`);

  //Función para generar dinámicamente el contenido de los pasos
  const generateStepContents = (maxSteps: number): JSX.Element[] => {
    console.log('Generando contenido dinámico...');
    const contents: JSX.Element[] = [];
    for (let i = 1; i < maxSteps+1; i++) {
        console.log('i '+i);
      if (i === 0) {
        contents.push(<PasoActivoPage key={i} itemConcepto={undefined}/>);
      } else {
        //contents.push(<p key={i}>Contenido del paso {i}.</p>);        
        contents.push(<PasoActivoPage key={i} itemConcepto={arregloConceptos[i-1] } />);
      }
    }
    return contents;
  };

  // Arreglo de contenidos para cada paso
  const stepContents = generateStepContents(totalPasos);
  console.log(`valor de stepContents: ${stepContents}`);

  const nextStep = () => {
    console.log('Estoy en el next step');
    if (step < totalPasos) {
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
    return stepContents[step - 1] || null;
  };

    const procesar=()=> {
        throw new Error("Function not implemented.");
    }
    return(
        <>                
        <div>        
        <code>Completa la información que se te solicita, las fechas son campos requeridos, los comentarios son opcionales </code>  
            <p style={{ margin: 0 }}/>                     
            <span className="badge text-bg-info">Paso {step} de {totalPasos}</span>
              
            <hr className="mt-1 mb-1"/>        

        {/* Contenido del paso actual */}
        {renderStepContent()}

         </div >

<div className="text-center">


         <button
            onClick={prevStep}
            className="btn btn-primary me-2"
            disabled={step <= 1}
          >
            <i className="bi bi-skip-start"></i>
            Anterior
          </button>
          <button
            onClick={nextStep}
            className="btn btn-primary me-2"
            //disabled={step >= maxSteps}
            disabled={totalPasos == step}
          >
            Siguiente
            <i className="bi bi-skip-end"></i>
          </button>

          <button
            onClick={procesar}
            className="btn btn-success me-2"
            hidden={step != totalPasos}
            disabled={step < totalPasos}
          >
            <i className="bi bi-send-check"></i>
            Enviar
          </button>
          </div>        
          <button onClick={onCloseModal} className="btn btn-secondary me-2"> <i className="bi-door-closed-fill"></i>Cerrar</button>

        </>    
    );
}