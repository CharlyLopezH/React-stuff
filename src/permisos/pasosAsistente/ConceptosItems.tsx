import React from 'react';
import { ConceptoCheck } from './ConceptoCheck';

export const ConceptosItems = ({ id, nombre, nota }) => (
    <tr>
      <th scope="row">
      <ConceptoCheck chequeado={undefined} deshabilitado={false}/></th>
      <td>{nombre} </td>          
      <td>{nota} </td>
    </tr>
);