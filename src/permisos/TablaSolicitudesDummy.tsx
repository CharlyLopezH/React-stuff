import React from "react"

export const TablaSolicitudesDummy = () => {
    return(
        <>
        <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Folio</th>
      <th scope="col">Fecha</th>
      <th scope="col">Comentarios</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>DAI/180/2020</td>
      <td>14/11/2020</td>
      <td>Aplicada</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>DAI/421/2021</td>
      <td>15/10/2021</td>
      <td>En Revisión</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>DAI/123/2021</td>
      <td>20/12/2021</td>
      <td>Aplicada</td>
    </tr>
  </tbody>
</table>
        </>
    )
}