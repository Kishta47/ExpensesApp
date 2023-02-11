import React, { useContext } from "react";
import Store from "../../Store/store-context";
import MainButton from "../../UI-Components/Button/MainButton";
import MainFrame from "../../UI-Components/Container/MainFrame";
import MainInput from "../../UI-Components/Main-Input/MainInput";
const AddExpense = () => {
   const context = useContext(Store); // calling store from context
   return (
      <MainFrame>
         <form className="row m-0 p-0 align-items-center justify-content-center h-100">
            <div className="col-12 row m-0 p-0 justify-content-center g-4 ">
               <div className="col-md-6">
                  <MainInput id="mainInput-1" placeholder="Expense Date" type="date" name="date" value={context.expenses.expense.date} onChange={context.inputOnChangeHandler} />
               </div>
               <div className="col-md-6 ">
                  <MainInput
                     id="mainInput-2"
                     placeholder="Expense Title"
                     type="text"
                     name="title"
                     value={context.expenses.expense.title}
                     onChange={(e) => {
                        context.inputOnChangeHandler(e);
                     }}
                  />
               </div>
               <div className="col-md-6 ">
                  <MainInput id="mainInput-3" placeholder="Expense Amount" type="number" name="amount" value={context.expenses.expense.amount} onChange={context.inputOnChangeHandler} />
               </div>
               <div className="col-12 text-end">
                  <MainButton text="Add" onClick={context.addExpenseHandler} type="button" />
               </div>
               <div className="col-12">
                  <input
                     onChange={(e) => {
                        context.themeColorPickerHandler(e);
                     }}
                     name="mainColor"
                     className="form-control "
                     type="color"
                     style={{ width: "10px" }}
                     placeholder="Pick Color"
                  />
               </div>
            </div>
         </form>
      </MainFrame>
   );
};

export default AddExpense;
