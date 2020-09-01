import React from "react";
const GetAll = ({ Users }) => {
  return (
    <div>
      {Users.map((user, key) => (
        <div className="card col-sm-8 mb-3 container center_div" key={key}>
          <ul className="list-group list-group-flush ">
            <li className="list-group-item">UserID : {user._id}</li>
            <li className="list-group-item">Name : {user.name}</li>
            <li className="list-group-item">Email : {user.email}</li>
            <li className="list-group-item">Address : {user.address}</li>
            <li className="list-group-item">Company Name : {user.companyName}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default GetAll;
