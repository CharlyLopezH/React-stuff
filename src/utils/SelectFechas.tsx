import React, { useState } from "react";
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addDays, isSameDay } from 'date-fns'; // Importar la función addDays
import { es } from 'date-fns/locale'; // Idioma español

// Configurar la localización para que la semana comience en domingo
const customLocale = {
    ...es,
    options: {
        ...es.options,
        weekStartsOn: 0 as 0 // 0 para domingo, 1 para lunes, etc.
    }
};

registerLocale('custom', customLocale);

export const SelectFechas=({titulo})=>{
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const today = new Date(); // Fecha de hoy

    const tomorrow = addDays(new Date(), 1); // Obtener el día de mañana

    // Función para agregar clases personalizadas a los días del calendario
    const highlightTomorrow = (date: Date) => {
      if (date.toDateString() === tomorrow.toDateString()) {
        return 'highlight-tomorrow'; // Clase personalizada para mañana
      }
      return '';
    };

   // Definir fechas a excluir (deshabilitar)
   const excludedDates = [
    new Date(2025, 0, 3), // 12 de octubre de 2024
    new Date(2024, 9, 18), // 18 de octubre de 2024
    new Date(2024, 9, 25), // 25 de octubre de 2024
    new Date(2024, 9, 14), // 25 de octubre de 2024
  ];
  const isWeekday = (date: Date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6; // 0: Domingo, 6: Sábado
  };

    // Función para comprobar si una fecha está excluida
    const isExcluded = (date: Date) => {
        return excludedDates.some((excludedDate) => isSameDay(date, excludedDate));
      };



 // Función para renderizar el contenido del día
    const renderDayContents = (day: number, date: Date) => {
    const dayOfWeek = date.getDay();
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6; // Sábado o Domingo
    const isFiltered = !isWeekday(date); // Día que ha sido filtrado
    const isDateExcluded = isExcluded(date); // Comprobar si la fecha está en el arreglo de excluidos

    return (
      <div
      style={{
        backgroundColor: isWeekend
          ? 'gray'
          : isFiltered || isDateExcluded
          ? 'red'
          : 'transparent',
        color: isFiltered || isDateExcluded ? 'white' : 'black',
        borderRadius: '5px',
        padding: '2px',
        textAlign: 'center',
      }}
      >
        {day}
      </div>
    );
  };
    return(
        <>
        {/* <code>{titulo} </code> */}
        <div className="form-group">    
      <DatePicker        
        locale={customLocale} // Idioma español        
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd/MM/yyyy"
        className="form-control"
        minDate={tomorrow} // Deshabilitar fechas anteriores a mañana
        placeholderText={titulo}
        //placeholderText="Seleccionea una fecha"
        filterDate={isWeekday} // Filtrar fechas, excluyendo sábados y domingos
        renderDayContents={renderDayContents} // Renderizar contenido personalizado
      />
    </div>
        </>
    )
}