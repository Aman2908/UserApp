import React from "react";
import FormGroup from "../Forms/FormGroup";
const RetrieveForm = ({ handleRetrieveData, handleSubmit, RetrieveData }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {[
          {
            Id: "_id",
            Label: "UserID",
            Type: "text",
            onChange: handleRetrieveData,
            Value: RetrieveData._id
          }
        ].map((fg, key) => (
          <FormGroup {...fg} key={key} />
        ))}
        <div className="col-md-8 col-md-offset-4 container center_div">
          <input type="submit" value="Submit" className="btn btn-primary my-3" />
        </div>
      </form>
    </div>
  );
};

export default RetrieveForm;
