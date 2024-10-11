import React from "react"

export const ConceptoCheck = ({chequeado, deshabilitado}) => {

  const handleCheckboxChange = () => {
    throw new Error("Function not implemented.")
  }

    return (
        <>
        <div className="form-check">
        <input
          type="checkbox"
          checked={chequeado}
          disabled={deshabilitado}
          onChange={handleCheckboxChange}
        />
        </div>
        </>
    )
}