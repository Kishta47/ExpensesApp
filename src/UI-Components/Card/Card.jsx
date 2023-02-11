import React from "react";
import "./Card.css";

const Card = (props) => {
   return (
      <section className="cardSection border-0 rounded-3 m-0  " onClick={props.onClick}>
         <header>
            <h2 className=" secondary-color secondary-font fw-bolder text-center">{props.title}</h2>
         </header>
         <div className="side-color" style={{ backgroundColor: props.color }}></div>
         <section>
            <h2 className=" main-color secondary-font fw-bolder text-center">{props.amount}</h2>
         </section>
         <section>
            <h4 className=" secondary-color secondary-font fw-bold text-center">{props.date}</h4>
         </section>
         <section className="row m-0 my-1 p-1 justify-content-center text-center">
            <div className="col-4">{props.delete}</div>
         </section>
      </section>
   );
};

export default Card;
