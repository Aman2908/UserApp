import React from "react";

const FormGroup = ({ Id, Label, Type, Value, onChange }) => {
  return (
    <div className="form-group col-md-8 col-md-offset-4 container center_div">
      <label htmlFor={Id}>{Label}</label>
      <input required type={Type} className="form-control" id={Id} name={Id} value={Value} onChange={onChange} aria-describedby={Id + "Help"} />
    </div>
  );
};

export default FormGroup;
