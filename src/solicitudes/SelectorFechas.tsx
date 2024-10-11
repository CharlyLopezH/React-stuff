import React, { ChangeEvent, useEffect, useState } from "react"
//import './EstilosFechasCalendario.css'


export const SelectorFechas=()=> {

      // Estado para la fecha seleccionada
      const [selectedDate, setSelectedDate] = useState('');

// Obtener la fecha de hoy y agregarle 8 días
const today = new Date();
const fechaFutura = new Date(today);
fechaFutura.setDate(today.getDate() + 8);
const minDate = fechaFutura.toISOString().split('T')[0];

//Prueba min
const ahora = new Date().toISOString().split('T')[0];


// Fechas a deshabilitar
const disabledDates = ['2024-10-22', '2024-10-29', '2024-10-30'];

    // Función para verificar si una fecha está deshabilitada
     const isDateDisabled = (date: string) => {
        return disabledDates.includes(date);
    };

    const handleDateChange=(e: React.ChangeEvent<HTMLInputElement>)=> {
        setSelectedDate(e.target.value);
    }

// Efecto para aplicar estilos personalizados al día de hoy


    return(
        <>
        <span>Seleccionar Fecha</span>
        <hr />
        <div>
            {/* <input
                type="date"
                className="form-control"
                //className={`form-control ${ahora ? 'bg-danger text-white' : ''}`} // Cambia el fondo si la fecha es hoy
                placeholder="Selecciona Fecha"
                value={selectedDate}
                onChange={handleDateChange}
                min={ahora} // Establecer la fecha mínima como hoy                
            /> */}

            
        </div> 
        </>
    )
}