import React, { useState } from 'react';
import { ConceptoCheck } from './ConceptoCheck';

//Render de los renglones de la tabla de conceptos
export const ConceptosItems = ({ id, nombre, codigo, nota, deshabilitado, onCheckboxChange }) => (  
    <tr>
      <th scope="row">
      <ConceptoCheck id={id} nombre={nombre} codigo={codigo} deshabilitado={deshabilitado} onCheckboxChange={onCheckboxChange}
      />
      </th>
      <td>{nombre} ({codigo}) </td>                
      <td>{nota} </td>
    </tr>
);