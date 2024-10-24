import { useState } from 'react';

//Días a los que se tiene derecho según fundamento
export const useDiasDerecho = () => {
  const [diasDerecho] = useState([
    { id: 0, nombre: "Cumpleaños", codigo: "CUM", fundamento: "art 41", derecho:"1"},
    { id: 1, nombre: "Vacaciones Pendientes", codigo: "VAC", fundamento: "Art. 42, 43 y 44", derecho:"Variable"},
    { id: 2, nombre: "Matrimonio", codigo: "MAT", fundamento: "Art 46, Fracción I", derecho:"8"},
    { id: 3, nombre: "Días Económicos", codigo: "ECO", fundamento: "Art 46, Fracción I", derecho:"8"},
    { id: 4, nombre: "Fallecimiento de familiar ", codigo: "RIP", fundamento: "Art 46, Fracción V", derecho:"3" },
    { id: 5, nombre: "Enfermedades Hijos Menores", codigo: "ENF", fundamento: "Art 46, Fracción VII", derecho:"2"},
    { id: 6, nombre: "Maternidad", codigo: "MAT", fundamento: "Art 46, Fracción I", derecho:"2"},
    { id: 7, nombre: "Paternidad", codigo: "PAT", fundamento: "Art 46, Fracción I", derecho:"90"},
    { id: 8, nombre: "Puntualidad Perfecta", codigo: "EST", fundamento: "Art. 54", derecho:"15"}
  ]);
  return diasDerecho;
};