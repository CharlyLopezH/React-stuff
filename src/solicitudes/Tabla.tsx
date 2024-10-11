import React from "react"
import { ConceptoCheck } from "./ConceptoCheck"
import { ComentariosInput } from "./ComentariosInput"
import { BotonCalendar } from "./BotonCalendar"

export const Tabla = () => {
    return(
  <>
  <table className="table">
  <thead className="table-light">
    <tr>
      <th scope="col"></th>
      <th scope="col">Concepto</th>
      <th scope="col">Fechas</th>
      <th scope="col">Comentarios</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><ConceptoCheck chequeado={undefined} deshabilitado={false}/></th>
      <td>Cumpleaños</td>
      <td><BotonCalendar/></td>
      <td><input className="form-control" placeholder="31 de Julio, ¡Felicidades!"></input></td>
    </tr>
    <tr>
      <th scope="row"><ConceptoCheck chequeado={undefined} deshabilitado={false}/></th>
      <td>Vacaciones Pendientes</td>
      <td><BotonCalendar/></td>
      <td><input className="form-control" placeholder="Número de Memo de guardías..."></input></td>
    </tr>
    <tr>
      <th scope="row"><ConceptoCheck chequeado={undefined} deshabilitado={false}/></th>
      <td>Matrimonio</td>
      <td><BotonCalendar/></td>
      <td><input className="form-control" placeholder="Acta de Matrimonio..."></input></td>
    </tr>
    <tr>
      <th scope="row"><ConceptoCheck chequeado={true} deshabilitado={false} /></th>
      <td>Días Económicos</td>
      <td><BotonCalendar/></td>
      <td><input className="form-control" placeholder="Anexar solicitud por escrito"></input></td>
    </tr>
    <tr>
      <th scope="row"><ConceptoCheck chequeado={undefined} deshabilitado={false}/></th>
      <td>Fallecimiento de familiar</td>
      <td><BotonCalendar/></td>
      <td><input className="form-control" placeholder="Anexar copia de documento"></input></td>
    </tr>
    <tr>
      <th scope="row"><ConceptoCheck chequeado={undefined} deshabilitado={false}/></th>
      <td>Enfermedades de hijos</td>
      <td><BotonCalendar/></td>
      <td><input className="form-control" placeholder="Comprobante Médico..."></input></td>
    </tr>

    <tr>
      <th scope="row"><ConceptoCheck chequeado={false} deshabilitado={false}/></th>
      <td>Maternidad</td>
      <td><BotonCalendar/></td>
      <td>No Aplica/Género Masculino</td>
    </tr>
    <tr>
      <th scope="row"><ConceptoCheck chequeado={undefined} deshabilitado={false}/></th>
      <td>Paternidad</td>
      <td><BotonCalendar/></td>
      <td><input className="form-control" placeholder="Acta de nacimiento críatura..."></input></td>
    </tr>
    <tr>
      <th scope="row"><ConceptoCheck chequeado={true} deshabilitado={false}/></th>
      <td>Puntualidad Perfecta</td>
      <td><BotonCalendar/></td>
      <td><input className="form-control" placeholder="Número de Memo"></input></td>
    </tr>

  </tbody>
</table>
        </>
    )
}