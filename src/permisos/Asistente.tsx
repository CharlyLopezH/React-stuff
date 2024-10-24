import React, { useState } from 'react';
//import { Paso0 } from './pasosAsistente/Paso0';

export const Asistente = ({ buttonId, onCloseModal }) => {
  const [step, setStep] = useState(1); // Estado para controlar el paso actual
  const [maxSteps, setMaxSteps] = useState(6);

  // Arreglo de contenidos para cada paso
  // const stepContents = [
  //   <Paso0 />,
  //   <p>Paso 2: Ingresa la fecha de inicio y fin del permiso.</p>,
  //   <p>Paso 3: Adjunta documentos justificantes (si es necesario).</p>,
  //   <p>Paso 4: Revisa y confirma los detalles de tu solicitud.</p>,
  //   <p>Paso 5: Enviar solicitud</p>
  // ];

  // Función para ir al siguiente paso
  const nextStep = () => {
    if (step < maxSteps) {
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
  // const renderStepContent = () => {
  //   return stepContents[step - 1] || null;
  // };

  const procesar = () => {
    console.log('Enviaré solicitud');
  };

  return (
    <>
      <div>
      <span className="badge badge-pill badge-primary">Primary</span>
        <div className="bg-light p-1 d-inline-block rounded w-100 d-flex justify-content-center align-items-center">
          Asistente para Solicitar Permisos de Ausencia
          <button
            className="btn-close ms-auto"
            type="button"
            aria-label="Close"
            onClick={onCloseModal}
            style={{
              top: '10px',
              left: '10px',
              fontSize: '1rem'
            }}
          ></button>
        </div>

        {/* Contenido del paso actual */}
        {/* {renderStepContent()} */}

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
            disabled={step >= maxSteps}
          >
            <i className="bi bi-skip-end"></i>
          </button>

          <button
            onClick={procesar}
            className="btn btn-success me-2"
            hidden={step !== maxSteps}
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