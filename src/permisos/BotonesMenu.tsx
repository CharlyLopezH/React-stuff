import React, { useEffect, useState } from "react";
import { AccionBoton } from "./AccionBoton";
import Modal from 'react-modal';
import '/src/App.css'; 

Modal.setAppElement('#root'); // Usa '#root' como selector

export const BotonesMenu = () => {
    const [clickedButton, setClickedButton] = useState("Ninguno");
    const [isOpen, setIsModalOpen] = useState(false)        

    const handleClick=(arg0: string)=> {
        console.log('Estoy llamando a botón '+arg0)
        //console.log('Estoy llamando a botón ' + buttonName);
        setClickedButton(arg0); // Establece el botón clicado
        setIsModalOpen(true); // Abre la modal
    }

        // Función para cerrar la modal
        const onCloseModal = () => {
            setIsModalOpen(false);
            setClickedButton("Ninguno"); // Opcional: restablece el estado
        }

  return (
    <>
      <div className="bg-light p-1 d-inline-block w-100 d-flex justify-content-center align-items-center border-top border-bottom border-dark p-1">
        
        <button type="button" className="btn btn-primary me-1" onClick={()=>handleClick("Asistente")}>
          <i className="bi bi-magic"></i> Nueva
        </button>
        
        <button type="button" className="btn btn-success me-1" onClick={()=>handleClick("Enviar")}>
          <i className="bi bi-send me-1"></i> Enviar
        </button>
        
        <button type="button" className="btn btn-danger me-1" onClick={()=>handleClick("Salvar")}>
          <i className="bi bi-life-preserver me-1"></i> Salvar
        </button>
        
        <button type="button" className="btn btn-info me-1" onClick={()=>handleClick("Revisar")}>
          <i className="bi bi-bootstrap-reboot"></i> Revisar
        </button>

        <Modal
              isOpen={isOpen} 
              onRequestClose={onCloseModal}
              className="Modal"
              overlayClassName="Overlay"
              contentLabel="Acción del Botón"
        >

        <AccionBoton buttonId={clickedButton} onCloseModal={onCloseModal} ></AccionBoton>

        </Modal>

      </div>
    </>
  );
};
