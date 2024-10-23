import React, { useEffect, useState } from "react";
import { ConceptoCheck } from "./ConceptoCheck";
import { ConceptosGen } from "./ConceptosGen";
import { ConceptosItems } from "./ConceptosItems";
import { useConceptosPermisos } from "../../hooks/useConceptosPermisos";

export const TablaConceptosPermisos = ({ onHandleClick, onCloseModal }) => {
  // Estado para almacenar los IDs de los conceptos seleccionados
  const [selectedConcepts, setSelectedConcepts] = useState<any[]>([]);
    
  const conceptosPermisos = useConceptosPermisos();
  //console.log('XXXX'+onHandleClick);

  // Función para manejar los cambios de selección de los checkboxes
  const onHandleClickEvent = (id: number,nombre: any, codigo:any, checked: boolean  ) => {
    console.log(`Función onclick de los checkboxes... id Seleccionada: ${id} ${nombre}`);
    //console.log(`Control Id:${id}, Chequeado: ${checked} `);
    console.log(`Lo que llega: ${id}, ${codigo}, ${nombre}` );
    setSelectedConcepts((prevSelected) => {
      if (checked) {
        console.log(`Agregando el elemento código es ${codigo} ` );
        
        return [...prevSelected, codigo]; // Agrega el ID si está seleccionado
      } else {
        console.log(`Quitando el id/concepto ${codigo}`);
        
        return prevSelected.filter((item) => item !== codigo); // Elimina el ID si está desmarcado
      }
    });
  };

  console.log(`Contador de pasos totales: ${selectedConcepts.length}`);
  //pasos=selectedConcepts.length;
  //console.log(`Pasos Determinados: ${pasos}`);

  // Usar useEffect para llamar a la función del padre después de que el componente hijo ha sido renderizado
  useEffect(() => {
    onHandleClick(selectedConcepts);
  }, [selectedConcepts, onHandleClick]);

  

  const continuar = () => {
    console.log(
      `Iniciar procesamiento de solicitud con:  ${selectedConcepts}`
    );
  };

  return (
    <>
      <table className="table">
        <thead className="table-light">
          <tr>
            <th scope="col"></th>
            <th scope="col">Concepto</th>
            <th scope="col">Nota</th>
          </tr>
        </thead>
        <tbody>
          {conceptosPermisos.map((c) => (
            <ConceptosItems
              key={c.id}
              id={c.id}
              nombre={c.nombre}
              codigo={c.codigo}
              nota={c.nota}
              deshabilitado={c.deshabilitado}
              onCheckboxChange={onHandleClickEvent}
            />
          ))}
        </tbody>
      </table>
      <div className="bg-light p-1 d-inline-block w-100 d-flex justify-content-center align-items-center border-top border-bottom border-gray p-1 mt-1">
        <button
          onClick={continuar}
          className="btn btn-success me-2"
          //hidden={step <= totalPasos}
          disabled={selectedConcepts.length == 0}
        >
        <i className="bi bi-lightning-fill"></i>
         Iniciar
        </button>

       
        <button onClick={onCloseModal} className="btn btn-info me-2">
        <i className="bi bi-door-closed-fill"></i> 
            Cerrar            
          </button>

      </div>
    </>
  );
};
