import React, { useState } from "react";
import { MensajeBienvenida } from "./pasosAsistente/MensajeBienvenida";
import { TablaConceptosPermisos } from "./pasosAsistente/TablaconceptosPermisos";
import { BotonesAsistente } from "./pasosAsistente/BotonesAsistente";
import { AsistenteDinamico } from "./AsistenteDinamico";

export const BienvenidaAsistente = ({ buttonId, onCloseModal }) => {
const [pasosTotales,setPasosTotales]=useState(0);

const onHandleClick=(valor:any )=>{
  console.log('Calculando pasos totales en TablaConceptosPermisos:');
  console.log(`Cantidad Id's Seleccionados: ${valor.length}`);
  console.log(`¡Conceptos Seleccionados!: ${valor}`);
  //Pasos totales que dará el asistente
  setPasosTotales(valor.length);
}

  return (
    <>
      <div className="bg-light p-1 d-inline-block rounded w-100 d-flex justify-content-center align-items-center">
        Bienvenido al Asistente {'Determinación de pasos: '+pasosTotales}
        <button
          className="btn-close ms-auto"
          type="button"
          aria-label="Close"
          onClick={onCloseModal}
          style={{
            top: "10px",
            left: "10px",
            fontSize: "1rem",
          }}
        ></button>
      </div>

      <MensajeBienvenida />
      <TablaConceptosPermisos onHandleClick={onHandleClick} onCloseModal={onCloseModal} />

      {/* <BotonesAsistente onCloseModal={onCloseModal} totalPasos={pasosTotales} /> */}
      {/* <AsistenteDinamico onCloseModal={onCloseModal} totalPasos={pasosTotales}/> */}
    </>
  );
};
