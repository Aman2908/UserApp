import React from "react";
import FormGroup from "../Forms/FormGroup";

const RegisterForm = ({ handleRegisterData, handleSubmit, RegisterData }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {[
          {
            Id: "name",
            Label: "Name",
            Type: "text",
            onChange: handleRegisterData,
            Value: RegisterData.name
          },
          {
            Id: "address",
            Label: "Address",
            Type: "text",
            onChange: handleRegisterData,
            Value: RegisterData.address
          },
          {
            Id: "email",
            Label: "Email",
            Type: "email",
            onChange: handleRegisterData,
            Value: RegisterData.email
          },
          {
            Id: "companyName",
            Label: "Company Name",
            Type: "text",
            onChange: handleRegisterData,
            Value: RegisterData.companyName
          }
        ].map((fg, key) => (
          <FormGroup {...fg} key={key} />
        ))}
        <div className="col-md-8 col-md-offset-4 container center_div">
          <input type="submit" value="Register" className="btn btn-primary my-3" />
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
