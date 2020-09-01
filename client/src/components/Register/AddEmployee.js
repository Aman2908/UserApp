import React from "react";
import { useState } from "react";
import RegisterForm from "./Register";
import { RegisterUser } from "../../services/create";
const AddEmployee = ({ handleRegistration }) => {
  const handleSubmit = async e => {
    e.preventDefault();
    await RegisterUser(RegisterData);
    handleRegistration();
  };

  const [RegisterData, setRegisterData] = useState({
    name: "",
    address: "",
    email: "",
    companyName: ""
  });
  const handleRegisterData = e => {
    setRegisterData({
      ...RegisterData,
      [e.target.name]: e.target.value
    });
  };
  return (
    <div>
      <RegisterForm
        {...{
          handleRegisterData,
          handleSubmit,
          RegisterData
        }}
      />
    </div>
  );
};

export default AddEmployee;
