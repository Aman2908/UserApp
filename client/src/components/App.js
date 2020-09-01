import React, { Component } from "react";
import AddEmployee from "./Register/AddEmployee";
import { GetUserID } from "../services/create";
import GetEmployee from "./Retrieve/GetEmployee";
import { GetUserData, GetAllUsers } from "../services/retrieve";
import GetAll from "./Retrieve/GetAll";
class App extends Component {
  state = {
    Isassigned: null,
    UserID: null,
    IsPresent: null,
    Name: "",
    Address: "",
    CompanyName: "",
    Email: "",
    Users: []
  };
  constructor() {
    super();
    this.state = {};
  }
  handleRegistration = () => {
    GetUserID().then(res => {
      this.setState(
        {
          Isassigned: true,
          UserID: res.data._id,
          Name: res.data.name,
          Email: res.data.email,
          Address: res.data.address,
          CompanyName: res.data.companyName
        },
        () => {
          const NewUser = {
            _id: this.state.UserID,
            name: this.state.Name,
            email: this.state.Email,
            address: this.state.Address,
            companyName: this.state.CompanyName
          };
          this.setState({
            Users: [...this.state.Users, NewUser]
          });
        }
      );
    });
  };
  handleRetrieval = RetrieveData => {
    GetUserData(RetrieveData)
      .then(res => {
        if (res.data === "No Such User With Given ID Exists") {
          this.setState({
            IsPresent: false
          });
        } else {
          this.setState({
            Name: res.data.name,
            Email: res.data.email,
            Address: res.data.address,
            CompanyName: res.data.companyName,
            IsPresent: true
          });
        }
      })
      .catch(() => {
        this.setState({
          IsPresent: false
        });
      });
  };
  componentDidMount() {
    GetAllUsers().then(res => {
      console.log(res);
      let users = [];
      for (var index in res.data) {
        users.push(res.data[index]);
      }
      this.setState({
        Users: users
      });
    });
  }
  render() {
    return (
      <div className="modal-body row">
        <div className="col-md-6">
          <div className="col-sm-8 mb-3 container center_div">
            <h2 className="mb-3 text-center">Add Employee</h2>
          </div>
          <AddEmployee handleRegistration={this.handleRegistration} />
          {this.state.Isassigned && this.state.UserID ? (
            <div className="card col-sm-8 mb-3 container center_div">
              <ul className="list-group list-group-flush ">
                <li className="list-group-item">UserID : {this.state.UserID}</li>
              </ul>
            </div>
          ) : (
            ""
          )}
          <div className="col-sm-8 mb-3 container center_div">
            <h2 className="mb-3 text-center">Get Employee</h2>
          </div>
          <GetEmployee handleRetrieval={this.handleRetrieval} />
          {this.state.IsPresent === true ? (
            <div className="card col-sm-8 mb-3 container center_div">
              <ul className="list-group list-group-flush ">
                <li className="list-group-item">Name : {this.state.Name}</li>
                <li className="list-group-item">Email : {this.state.Email}</li>
                <li className="list-group-item">Address : {this.state.Address}</li>
                <li className="list-group-item">Company Name : {this.state.CompanyName}</li>
              </ul>
            </div>
          ) : this.state.IsPresent === false ? (
            <div className="card col-sm-8 mb-3 container center_div">
              <ul className="list-group list-group-flush ">
                <li className="list-group-item">UserID : Does Not Exist</li>
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="col-md-6">
          {this.state.Users && this.state.Users.length > 0 ? (
            <>
              <div className="col-sm-8 mb-3 container center_div">
                <h2 className="mb-3 text-center">All Employees</h2>
              </div>
              <GetAll Users={this.state.Users} />
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}
export default App;
