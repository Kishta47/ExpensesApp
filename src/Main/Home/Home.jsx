import React from "react";
import MainFrame from "../../UI-Components/Container/MainFrame";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
   return (
      <MainFrame>
         <div className="row  m-0 p-0 h-100 justify-content-center  align-content-center">
            <div className="col-12 text-center">
               <h1 className="secondary-color secondary-font fw-bold font-large">The Expenses Tracker</h1>
            </div>
            <div className="col-12 text-center main-color">
               <h4>
                  <Typewriter words={["Track Your Expenses", "Save Your Money"]} loop={false} cursor />
               </h4>
            </div>
        
         </div>
      </MainFrame>
   );
};

export default Home;
