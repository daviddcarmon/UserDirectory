import React from "react";

function UserCard(props) {
  return (
    <div className="card text-center">
      
      <div className="card-body">{props.children}</div>
    </div>
  );
}

export default UserCard;
