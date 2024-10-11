import React from "react";
import { permisoDTO } from "./permisos.model";

export default function PermisoIndividual(props:permisoIndividualProps) {

    return(
        <>
        <div>
            <a>{props.permisoDTO.id}</a>
            <a>{props.permisoDTO.fecha}</a>

        </div>
        </>
    )

}


interface permisoIndividualProps {
    permisoDTO:permisoDTO;
}