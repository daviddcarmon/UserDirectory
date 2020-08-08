import React from "react";

function UserInfo(props) {
  console.log(props);
  return (
    <div className="text-center">
      <img
        alt={props.name}
        className="img-fluid"
        src={props.picture.thumbnail}
        style={{ margin: "0 auto" }}
      />
      <h5>
        Name: {props.name.first} {props.name.last}
      </h5>
      <h5>Age: {props.age}</h5>
      <h5>City: {props.city}</h5>
      <h5>State: {props.state}</h5>
      <h5>Email: {props.email}</h5>
    </div>
  );
}

export default UserInfo;