import React from "react";
import "./MainButton.css";
const MainButton = (props) => {

   return (
      <button type={props.type} onClick={props.onClick} className="button rounded-3 px-3 py-1">
         {props.text}
      </button>
   );
};

export default MainButton;
