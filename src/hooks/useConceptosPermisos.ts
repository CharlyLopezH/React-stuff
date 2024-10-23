import { useState } from 'react';

export const useConceptosPermisos = () => {
  const [conceptosPermisos] = useState([
    { id: 0, nombre: "Cumpleaños", codigo: "CUM", nota: "Puede permutarse", deshabilitado: false },
    { id: 1, nombre: "Vacaciones Pendientes", codigo: "VAC", nota: "Requiere memo de guardias", deshabilitado: false },
    { id: 2, nombre: "Matrimonio", codigo: "MAT", nota: "Acta de Matrimonio", deshabilitado: false },
    { id: 3, nombre: "Días Económicos", codigo: "ECO", nota: "8 días por reglamento", deshabilitado: false },
    { id: 4, nombre: "Fallecimiento de familiar ", codigo: "RIP", nota: "Anexar copia de acta de Defunción", deshabilitado: false },
    { id: 5, nombre: "Enfermedades Hijos Menores", codigo: "ENF", nota: "Requiere certificación médica (No Receta)", deshabilitado: false },
    { id: 6, nombre: "Maternidad", codigo: "MAT", nota: "No aplica para varones", deshabilitado: true },
    { id: 7, nombre: "Paternidad", codigo: "PAT", nota: "Acta de nacimiento, comprobante de parto o acta de adopción", deshabilitado: false },
    { id: 8, nombre: "Puntualidad Perfecta", codigo: "EST", nota: "No se pueden tomar consecutivos o seguidos de otros inhabiles", deshabilitado: false },
  ]);
  return conceptosPermisos;
};