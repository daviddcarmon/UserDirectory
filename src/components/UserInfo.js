import React from "react";

function UserInfo(props) {
  // console.log(props)
  // console.log(props.keys);
  return (
    <div className="row" key={props.keys}>
      <img
        alt={props.name}
        className="img-fluid"
        src={props.img}
        style={{ margin: "0 auto", marginLeft: "0" }}
      />
      <div style={{ textAlign: "center", marginRight: "370px" }}>
        <h5 className={props.firstName}>
          Name: {props.firstName} {props.lastName}
        </h5>
        <h5>Age: {props.age}</h5>
        <h5>City: {props.city}</h5>
        <h5>State: {props.state}</h5>
        <h5>Country: {props.country}</h5>
        <h5>Email: {props.email}</h5>
      </div>
    </div>
  );
}

export default UserInfo;
