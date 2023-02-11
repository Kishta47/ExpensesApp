import React from "react";

const BgAdjustment = (props) => {
   return (
      <React.Fragment>
         <div className={`bgSection position-relative ${props.className}`}>{props.children}</div>
      </React.Fragment>
   );
};

export default BgAdjustment;
