import React from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
   const { pathname } = useLocation(); // catching path name through useLocation hook
   return (
      <nav className="navbar navbar-expand-lg position-absolute top-0 start-0 end-0 ">
         <div className="container  ">
            <h4 className="main-font main-color navbar-header ">Expenses</h4>
            <button className="navbar-toggler main-color border-0 " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <i className="fa-solid fa-bars-staggered "></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <ul className="navbar-nav d-flex justify-content-end text-center w-100 mb-2 mb-lg-0  ">
                  <li className="nav-item  ">
                     <Link className={`nav-link navbar-list ${pathname == "/" ? "active" : ""} `} to="/">
                        Home
                     </Link>
                  </li>
                  <li className="nav-item">
                     <Link className={`nav-link navbar-list ${pathname == "/addExpense" ? "active" : ""} `} to="/addExpense">
                        Add Expense
                     </Link>
                  </li>
                  <li className="nav-item">
                     <Link className={`nav-link navbar-list ${pathname == "/expenses" ? "active" : ""} `} to="/expenses">
                        Expenses
                     </Link>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
