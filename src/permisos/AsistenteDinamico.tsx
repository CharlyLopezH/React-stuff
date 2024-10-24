import React, { useState } from 'react';
import { PasoBienvenida } from './pasosAsistente/PasoBienvenida';

export const AsistenteDinamico = ({ arregloConceptos:any,totalPasos, onCloseModal }) => {
  const [step, setStep] = useState(1); // Estado para controlar el paso actual
  const [maxSteps, setMaxSteps] = useState(totalPasos);


  // Función para generar dinámicamente el contenido de los pasos
  const generateStepContents = (maxSteps: number): JSX.Element[] => {
    console.log('Generando contenido dinámico');
    const contents: JSX.Element[] = [];
    for (let i = 1; i < maxSteps; i++) {
      if (i === 0) {
        contents.push(<PasoBienvenida key={i} dato={'dato'} />);
      } else {
        contents.push(<p key={i}>Paso {i + 1}: Contenido del paso {i + 1}.</p>);
      }
    }
    return contents;
  };

  // Arreglo de contenidos para cada paso
  const stepContents = generateStepContents(totalPasos);
  console.log('arreglo de stepContents'+stepContents);

  // Función para ir al siguiente paso
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

  const procesar = () => {
    console.log('Enviaré solicitud');
  };

  return (
    <>
      <div>
        <div className="bg-light p-1 d-inline-block rounded w-100 d-flex justify-content-center align-items-center">
          step {step} / maxSteps {totalPasos}
          {/* <button
            className="btn-close ms-auto"
            type="button"
            aria-label="Close"
            onClick={onCloseModal}
            style={{
              top: '10px',
              left: '10px',
              fontSize: '1rem'
            }}
          ></button> */}
        </div>

        {/* Contenido del paso actual */}
        {renderStepContent()}

        {/* Controles del asistente */}
        <div className="bg-light p-1 d-inline-block w-100 d-flex justify-content-center align-items-center border-top border-bottom border-gray p-1 mt-1">
          <button
            onClick={prevStep}
            className="btn btn-primary me-2"
            disabled={step <= 1}
          >
            <i className="bi bi-skip-start"></i>
          </button>
          <button
            onClick={nextStep}
            className="btn btn-primary me-2"
            //disabled={step >= maxSteps}
            disabled={totalPasos == step}
          >
            <i className="bi bi-skip-end"></i>
          </button>

          <button
            onClick={procesar}
            className="btn btn-success me-2"
            //hidden={step <= totalPasos}
            disabled={totalPasos==0}
          >
            <i className="bi bi-send-check"></i>
          </button>

          <button onClick={onCloseModal} className="btn btn-secondary ms-3">
            Cerrar
          </button>
        </div>
      </div>
    </>
  );
};