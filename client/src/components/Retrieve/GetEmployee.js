import React from "react";
import { useState } from "react";
import RetrieveForm from "./Retrieve";

const GetEmployee = ({ handleRetrieval }) => {
  const handleSubmit = e => {
    e.preventDefault();
    handleRetrieval(RetrieveData);
  };
  const [RetrieveData, setRetrieveData] = useState({
    _id: ""
  });
  const handleRetrieveData = e => {
    setRetrieveData({
      ...RetrieveData,
      [e.target.name]: e.target.value
    });
  };
  return (
    <div>
      <RetrieveForm
        {...{
          handleRetrieveData,
          handleSubmit,
          RetrieveData
        }}
      />
    </div>
  );
};

export default GetEmployee;
