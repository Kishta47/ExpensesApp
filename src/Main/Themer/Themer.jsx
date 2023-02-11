import React, { useContext } from "react";
import Store from "../../Store/store-context.js";
import MainButton from "../../UI-Components/Button/MainButton.jsx";
import Navbar from "../../UI-Components/Navbar/Navbar.jsx";
import BgAdjustment from "./BgAdjustment/BgAdjustment.jsx";
import "./Themer.css";

import ThemerInput from "./ThemerInput.jsx";
const Themer = () => {
   const context = useContext(Store);
   return (
      <React.Fragment>
         <div className="themer p-lg-4">
            <div className="row m-0 p-0">
               <div className="col-12 ">
                  <h1 className="secondary-font fw-bold text-center my-2 m-auto border-dark border-bottom w-25">Theme Adjustment</h1>
               </div>
               <section className="col-12 row m-0 p-lg-4 p-md-2 border border-dark rounded-2  text-center">
                  <div className="col-12 align-items-center row m-0">
                     <div className="col-md-4">
                        <ThemerInput
                           label="BackGround main color adjustment:"
                           onChange={(e) => {
                              context.themeColorPickerHandler(e);
                           }}
                           name="defaultBgColor"
                        />
                        <ThemerInput
                           label="BackGround secondary color adjustment:"
                           onChange={(e) => {
                              context.themeColorPickerHandler(e);
                           }}
                           name="defaultBgSecColor"
                        />
                     </div>
                     <div className="col-md-8 p-2 ">
                        <BgAdjustment></BgAdjustment>
                     </div>
                  </div>
                  <div className="col-12 align-items-center row m-0">
                     <div className="col-md-4">
                        <ThemerInput
                           label="Main color adjustment:"
                           onChange={(e) => {
                              context.themeColorPickerHandler(e);
                           }}
                           name="mainColor"
                        />
                     </div>
                     <div className="col-md-8 p-2 overflow-hidden ">
                        <BgAdjustment className="text-center main-color main-font fw-bold fs-4  p-4">
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt modi ea recusandae veritatis repellat nulla officiis esse libero nam, sint doloremque sequi alias? Eius, eos? Odio recusandae quam rerum dolorem?{" "}
                        </BgAdjustment>
                     </div>
                  </div>
                  <div className="col-12 align-items-center row m-0">
                     <div className="col-md-4">
                        <ThemerInput
                           label="Secondary color adjustment:"
                           onChange={(e) => {
                              context.themeColorPickerHandler(e);
                           }}
                           name="secondaryColor"
                        />
                     </div>
                     <div className="col-md-8 p-2 ">
                        <BgAdjustment className="text-center secondary-color main-font fw-bold fs-4   p-4">
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt modi ea recusandae veritatis repellat nulla officiis esse libero nam, sint doloremque sequi alias? Eius, eos? Odio recusandae quam rerum dolorem?{" "}
                        </BgAdjustment>{" "}
                     </div>
                  </div>
                  <div className="col-12 align-items-center row m-0">
                     <div className="col-md-4">
                        <ThemerInput
                           label=" Navar Background adjustment:"
                           onChange={(e) => {
                              context.themeColorPickerHandler(e);
                           }}
                           name="navBgColor"
                        />
                     </div>
                     <div className="col-md-8 p-2 ">
                        <BgAdjustment>
                           <Navbar />
                        </BgAdjustment>
                     </div>
                  </div>
                  <div className="col-12 align-items-center row m-0">
                     <div className="col-md-4 row m-0 p-0">
                        <div className="col-6 row m-0 p-0">
                           {" "}
                           <ThemerInput
                              label="  Font Color:"
                              onChange={(e) => {
                                 context.themeColorPickerHandler(e);
                              }}
                              name="mainButtonFontColor"
                           />
                        </div>
                        <div className="col-6 row m-0 p-0">
                           {" "}
                           <ThemerInput
                              label="  BG-Color:"
                              onChange={(e) => {
                                 context.themeColorPickerHandler(e);
                              }}
                              name="mainButtonColor"
                           />
                        </div>
                        <div className="col-6 row m-0 p-0">
                           {" "}
                           <ThemerInput
                              label="Font Color onHover"
                              onChange={(e) => {
                                 context.themeColorPickerHandler(e);
                              }}
                              name="mainButtonFontHoverColor"
                           />
                        </div>
                        <div className="col-6 row m-0 p-0">
                           {" "}
                           <ThemerInput
                              label="BG Color onHover"
                              onChange={(e) => {
                                 context.themeColorPickerHandler(e);
                              }}
                              name="mainButtonHoverColor"
                           />
                        </div>
                     </div>
                     <div className="col-md-8 p-2  ">
                        <BgAdjustment className="d-flex m-0 justify-content-center align-items-center">
                           <MainButton text="Main Button" />
                        </BgAdjustment>
                     </div>
                  </div>
                  <div className="col-12 text-center mt-3 p-2">
                     <button
                        onClick={() => {
                           context.onClickSetThemeHandler();
                        }}
                        className="btn btn-dark ">
                        Save Changes
                     </button>
                  </div>
               </section>
            </div>
         </div>
      </React.Fragment>
   );
};

export default Themer;
