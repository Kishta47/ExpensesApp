import React from "react";
import { Route, Routes } from "react-router-dom";
import AddExpense from "./Main/AddExpense/AddExpense";
import Expense from "./Main/Expense/Expense";
import Home from "./Main/Home/Home";
import Themer from "./Main/Themer/Themer.jsx";
function App() {
   return (
      <React.Fragment>
         <Routes>
            <Route path="/">
               <Route path="" element={<Home />} />
               <Route path="addExpense" element={<AddExpense />} />
               <Route path="expenses" element={<Expense />} />
            </Route>
            <Route path="/themer" element={<Themer />} />
         </Routes>
      </React.Fragment>
   );
}

export default App;
