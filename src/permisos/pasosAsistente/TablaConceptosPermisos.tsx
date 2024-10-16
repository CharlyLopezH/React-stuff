import React from "react";
import { ConceptoCheck } from "./ConceptoCheck";
import { ConceptosGen } from "./ConceptosGen";
import { ConceptosItems } from "./ConceptosItems";

export const TablaConceptosPermisos = () => {

  const conceptosPermisos = [
    { id: 0, nombre: 'Cumpleaños', codigo: 'CUM', nota:'Puede permutarse' },
    { id: 1, nombre: 'Vacaciones Pendientes', codigo: 'VAC', nota:'Requiere memo de guardias' },
    { id: 2, nombre: 'Matrimonio', codigo: 'MAT', nota:'Acta de Matrimonio' },
    { id: 3, nombre: 'Días Económicos', codigo: 'ECO', nota:'8 días por reglamento' },
    { id: 4, nombre: 'Fallecimiento de familiar ', codigo: 'RIP', nota:'Anexar copia de acta de Defunción' },
    { id: 5, nombre: 'Enfermedades Hijos Menores', codigo: 'ENF', nota:'Requiere certificación médica (No Receta)' },
    { id: 6, nombre: 'Maternidad', codigo: 'MAT', nota:'Incapacidad por maternidad' },
    { id: 7, nombre: 'Paternidad', codigo: 'PAT', nota:'Acta de nacimiento, comprobante de parto o acta de adopción' },
    { id: 8, nombre: 'Puntualidad Perfecta', codigo: 'EST', nota:'No se pueden tomar consecutivos o seguidos de otros inhabiles' }
  ];

    return(
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

     {conceptosPermisos.map(c=>(
      <ConceptosItems
       key={c.id}
       id={c.id}
       nombre={c.nombre} 
       nota={c.nota} 
      />
     )
     )}
 </tbody>
</table>
        </>
    )
}