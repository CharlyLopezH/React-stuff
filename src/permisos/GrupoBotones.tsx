import React, { useState } from "react";
import Modal from 'react-modal';
import '/src/App.css'; 
import { BotonGenerico } from "./BotonGenerico";
import { AsistenteDinamico } from "./AsistenteDinamico";
import { PantallaDummy } from "./PantallaDummy";
import { BienvenidaAsistente } from "./BienvenidaAsistente";

Modal.setAppElement('#root'); // Usa '#root' como selector

export const GrupoBotones = () => {
    const [clickedButton, setClickedButton] = useState("");
    const [isOpen, setIsModalOpen] = useState(false)        

    const handleClick=(arg0: string)=> {
        setClickedButton(arg0); // Establece el botón clicado
        //console.log(`botón pushado: ${arg0}`);
        if (arg0 == '0' || arg0=='1') setIsModalOpen(true); // Abre el componente modal
    }

        // Función para cerrar la modal
        const onCloseModal = () => {
            setIsModalOpen(false);
            setClickedButton(""); // Opcional: restablece el estado
        }

        const botones = [
            { id: 0, text: 'Asistente', className: 'btn btn-primary me-1', icono:'bi bi-magic' },
            { id: 1, text: 'Botón 2', className: 'btn btn-success me-1', icono:'bi bi-send me-1' },
            { id: 2, text: 'Botón 3', className: 'btn btn-danger me-1',  icono:'bi bi-lightning-charge' },
          ];

  return (
    <>
      <div className="bg-light p-1 d-inline-block w-100 d-flex justify-content-center align-items-center border-top border-bottom border-dark p-1">
      {botones.map((boton) => (
        <BotonGenerico
        key={boton.id}
        id={boton.id}
        text={boton.text}
        className={boton.className}        
        icono={boton.icono}
        onClick={handleClick}
       />
        ))}
         <Modal
            isOpen={isOpen} 
            onRequestClose={onCloseModal}
            className="Modal"
            overlayClassName="Overlay"
            contentLabel="Acción del Botón"
            >
            {clickedButton=='0' && (  //boton Asistente fue presionado
            //  <AsistenteDinamico buttonId={clickedButton} onCloseModal={onCloseModal} />        
            <BienvenidaAsistente buttonId={clickedButton} onCloseModal={onCloseModal} />
            )}
            {clickedButton=='1' && (  //Otro botón
             <PantallaDummy buttonId={clickedButton} onCloseModal={onCloseModal} />        
            )}

         </Modal>
    
      </div>
    </>
  );
};
