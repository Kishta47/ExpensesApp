import React from "react";

const ThemerInput = (props) => {
   return (
      <React.Fragment>
         <div className="col-12 bgPicker-container ">
            <label htmlFor={props.id} className="bgPickerLabel d-block fw-bold mb-2">
               {props.label}
            </label>
            <input id={props.id} name={props.name} type="color" className="bgPickerInput d-block m-auto" onChange={props.onChange} value={props.value} />
         </div>
      </React.Fragment>
   );
};

export default ThemerInput;
