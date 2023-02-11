import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar.jsx";
import { motion } from "framer-motion";
import "./MainFrame.css";
const MainFrame = (props) => {
   return (
      <section className="section position-relative d-flex  align-items-end">
         <Navbar />
         <Link to="/themer">
            <motion.div initial={{ x: "12vh" }} whileHover={{ x: "0" }} className="themerRoute-container row m-0 p-0 fs-3 align-items-center">
               <div className="col-3">
                  <i className="fa-solid fa-cog fa-spin "></i>
               </div>
               <div className="col-9 secondary-font fw-bold text-center">Theme</div>
            </motion.div>
         </Link>

         <div className="container-main">{props.children}</div>
      </section>
   );
};

export default MainFrame;
