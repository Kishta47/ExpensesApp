import React from "react";
import "./MainInput.css";
const MainInput = (props) => {
   // Creating new theme for MUI

   return <input id={props.id} type={props.type} name={props.name} placeholder={props.placeholder} onChange={props.onChange} autoComplete="off" className="mainInput form-control" value={props.value} />;
};

export default MainInput;
