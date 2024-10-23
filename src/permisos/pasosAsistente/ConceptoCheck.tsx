import React, { useEffect, useState } from "react"

export const ConceptoCheck = ({id,nombre,codigo,deshabilitado,onCheckboxChange}) => {

  const handleChange = (e) => {onCheckboxChange(id, nombre, codigo, e.target.checked); // Llama a la función del componente padre cuando cambie el checkbox
  };
  return (
        <>        
        <div className="form-check">
        <input
          type="checkbox"                    
          disabled={deshabilitado}    
          onChange={handleChange}              
        />
        </div>
        </>
    )
}