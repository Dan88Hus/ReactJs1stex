import React from 'react';
import './userOutput.css';


const userOutput = (props) => {
  return (
    <div className= "userOutput">
      <p>Username: {props.userName}  </p>
      <p>I hope I will be overwritten!</p>

  </div>
  );
  
}
export default userOutput;