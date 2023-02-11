import React, { useContext } from "react";
import Card from "../../UI-Components/Card/Card";
import MainFrame from "../../UI-Components/Container/MainFrame";
import Store from "../../Store/store-context";
import MainButton from "../../UI-Components/Button/MainButton";
import "./Expense.css";
const Expense = () => {
   const context = useContext(Store); // calling the store from context hook
   const { allExpenses, totalAmount } = context.expenses; //Detructing data from store
   return (
      <MainFrame>
         <section className="row m-0 p-0 justify-content-center align-items-start  ">
            <header className="col-12 row m-0 p-0 justify-content-center mt-5   ">
               <div className=" col-md-8 ">
                  <Card title="Available Cash" amount={` ${totalAmount} Pounds`} color={Number(totalAmount) > 0 ? "green" : "red"} />
               </div>
            </header>
            {allExpenses.length > 0 && (
               <section className="col-12 row m-0 p-0 mt-3 justify-content-center text-center my-2 gy-2">
                  <div className="col-sm-3">
                     <MainButton text="Sort By Amount" type="button" onClick={context.sortHandler} />
                  </div>
                  <div className="col-sm-3">
                     <select
                        onChange={(e) => {
                           context.dateFilterByMonth(e);
                        }}
                        value={context.filteredMonth}
                        className="w-100 p-2 ">
                        <option value="">Filter By Month</option>
                        <option value="0">January</option>
                        <option value="1">February</option>
                        <option value="2">March</option>
                        <option value="3">April</option>
                        <option value="4">May</option>
                        <option value="5">June</option>
                        <option value="6">July</option>
                        <option value="7">August</option>
                        <option value="8">September</option>
                        <option value="9">October</option>
                        <option value="10">November</option>
                        <option value="11">December</option>
                     </select>
                  </div>
               </section>
            )}

            <section className="col-12 row m-0 p-0 mt-3 justify-content-center align-items-start  gy-3">
               {allExpenses.map((expense, index) => {
                  // Feltring by month
                  const date = new Date(expense.date);
                  return date.getMonth() == context.filteredMonth ? (
                     <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                        <Card
                           title={expense.title}
                           amount={expense.amount}
                           date={expense.date}
                           color={Number(expense.amount) > 0 ? "green" : "red"}
                           delete={
                              <MainButton
                                 text={<i className="fa-solid fa-trash"></i>}
                                 type="button"
                                 onClick={() => {
                                    context.deleteExpense(index);
                                 }}
                              />
                           }
                        />
                     </div>
                  ) : (
                     context.filteredMonth == "" && (
                        <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                           <Card
                              title={expense.title}
                              amount={expense.amount}
                              date={expense.date}
                              color={Number(expense.amount) > 0 ? "green" : "red"}
                              delete={
                                 <MainButton
                                    text={<i className="fa-solid fa-trash"></i>}
                                    type="button"
                                    onClick={() => {
                                       context.deleteExpense(index);
                                    }}
                                 />
                              }
                           />
                        </div>
                     )
                  );
               })}
            </section>
         </section>
      </MainFrame>
   );
};

export default Expense;
