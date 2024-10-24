import React, { useEffect, useState } from "react"
import { useDiasDerecho } from "../hooks/useDiasDerecho"
import { useConceptosPermisos } from "../hooks/useConceptosPermisos";
import { SelectFechas } from "../utils/SelectFechas";


export const PasoActivoPage=({itemConcepto})=>{
const [tituloCalendar, setTituloCalendar]=useState('');

    //Trae el array de derechos días   
    const derechosDias = useDiasDerecho(); 
    //Consulta de los nombres de los conceptos
    const nombresConceptos = useConceptosPermisos(); 

// Función para obtener el valor de derecho según el id
const obtenerDerechoPorId = (id: any) => {
    const permisoDias = derechosDias.find((item: { id: any; }) => item.id === id);
    return permisoDias ? permisoDias.derecho : null;
};

// Función para obtener el nombre de un concepto según el id
const obtenerConceptoPorId = (id: any) => {
    const nombreConcepto = nombresConceptos.find((item: { id: any; }) => item.id === id);
    return nombreConcepto ? nombreConcepto.nombre : null;
};

useEffect(()=>{    
    console.log('Damn useffect: '+itemConcepto);
    if (itemConcepto==0) {
        setTituloCalendar("Fecha especial");
    }else{
        setTituloCalendar("Fechas Requeridas"); 
    }
},[itemConcepto])   
   
    

    return(
        <>
        <div>        
            <div className="text-center">
                <span className="badge text-bg-light">Por concepto de: {`${obtenerConceptoPorId(itemConcepto)} `}</span>
                <p className="mt-0 mb-0"/>
                <span className="badge text-bg-light">Derecho: {`${obtenerDerechoPorId(itemConcepto)} (días) `}</span>
            </div>
                                              
            < p className="mt-0 mb-0"/>             
            <SelectFechas titulo={tituloCalendar}/>
            < p className="mt-1"/>             
            <input className=" form-control w-80"  placeholder="Comentarios"></input>

            < p className="mt-1"/>             
            <input className=" form-control w-80"  placeholder="Anexar comprobante..."></input>

            <p/>
        </div>
        </>
    )
}