import React from "react";

export const BotonGenerico = ({ id, icono, text, className, onClick }) => {
    //console.log(icono);
  return (
    <>
      <button className={className} onClick={() => onClick(id, text)}>       
      <i className={icono}></i>
        {text}
      </button>
    </>
  );
};
