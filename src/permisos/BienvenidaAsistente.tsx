import React, { useEffect, useState } from "react";
import { TablaConceptosPermisos } from "./pasosAsistente/TablaconceptosPermisos";
import { AsistenteVirtual } from "./AsistenteVirtual";

export const BienvenidaAsistente = ({ buttonId, onCloseModal }) => {
const [pasosTotales,setPasosTotales]=useState(0);

const [mostrarTablaConceptos, setMostrarTablaConceptos] = useState(true);
const [mostrarDummy,setMostrarDummy]=useState(false);
const [arregloConceptos, setArregloConceptos]=useState([]);

const onHandleClick=(valor:any )=>{
  console.log(`Conceptos Seleccionados--->: ${valor}`);
  //Pasos totales que dará el asistente
  setPasosTotales(valor.length);
  setArregloConceptos(valor);
}


  useEffect(()=>{
    //console.log('useEffect para cambiar alternar entre pantallas a mostrar');
    setMostrarTablaConceptos(!mostrarDummy);
  },[mostrarDummy])

    return (
      <>
        <div className="bg-light p-1 d-inline-block rounded w-100 d-flex justify-content-center align-items-center">
          {/* Bienvenido al Asistente {`Determinación de pasos: ${pasosTotales} ${arregloConceptos}`} */}
          Asistente Virtual para la Solicitud de Permiso de Ausencia
          <button className="btn-close ms-auto" type="button" aria-label="Close" onClick={onCloseModal}  style={{top: "10px", left: "10px", fontSize: "1rem",}}></button>
        </div>

        {/* <MensajeBienvenida /> */}

        {/* Se muestra por default la pantalla de introducción al asistente */}
        {mostrarTablaConceptos && (<TablaConceptosPermisos onHandleClick={onHandleClick} onCloseModal={onCloseModal} setMostrarDummy={setMostrarDummy}  />)}

        {/* Por default se oculta la pantalla siguiente; y se muestra si el valor de Tablaconceptos es falso */}
        {mostrarDummy && (<AsistenteVirtual buttonId={'Prueba'} onCloseModal={onCloseModal} totalPasos={pasosTotales} arregloConceptos={arregloConceptos}  />)}

        {/* <AsistenteVirtual buttonId={undefined} onCloseModal={undefined}/> */}



        {/* <BotonesAsistente onCloseModal={onCloseModal} totalPasos={pasosTotales} /> */}
        {/* <AsistenteDinamico onCloseModal={onCloseModal} totalPasos={pasosTotales}/> */}
      </>
    );
  };
