import React, { useState, useEffect, useMemo, useCallback } from "react";
import swal from "sweetalert";
// calling store from createContext

const Store = React.createContext({
   expenses: {},
   addExpenseHandler: (e) => {},
   inputOnChangeHandler: (e) => {},
   sortHandler: () => {},
   dateFilterByMonth: (e) => {},
   deleteExpense: (index) => {},
   setThemeDefault: (obj) => {},
   themeColorPickerHandler: (e) => {},
   onClickSetThemeHandler: () => {},
   filteredMonth: "",
});
// A store provider for whole app
export const StoreProvider = (props) => {
   // StoreState
   const [filteredMonth, setFilteredMonth] = useState("");
   const [expenses, setExpenses] = useState({
      allExpenses: [],
      expense: { title: "", amount: "", date: "" },
      totalAmount: 0,
      sortFlag: false,
      themeProps: {
         defaultBgColor: "--defaultBgColor",
         defaultBgSecColor: "--defaultBgSecColor",
         mainColor: "--mainColor",
         secondaryColor: "--secondaryColor",
         mainButtonColor: "--mainButtonColor",
         mainButtonFontColor: "--mainButtonFontColor",
         mainButtonHoverColor: "--mainButtonHoverColor",
         mainButtonFontHoverColor: "--mainButtonFontHoverColor",
         navBgColor: "--navBgColor",
      },
      defaultTheme: {
         defaultBgColor: "#012f63",
         defaultBgSecColor: "#012f63bd",
         mainColor: "#fe667b",
         secondaryColor: "#a7bbc3",
         mainButtonColor: "#fc4c63",
         mainButtonFontColor: "#beced4",
         mainButtonHoverColor: "#fc203d",
         mainButtonFontHoverColor: "#deecf0",
         navBgColor: "transparent",
      },
      activeTheme: {
         defaultBgColor: "#012f63",
         defaultBgSecColor: "#012f63bd",
         mainColor: "#fe667b",
         secondaryColor: "#a7bbc3",
         mainButtonColor: "#fc4c63",
         mainButtonFontColor: "#beced4",
         mainButtonHoverColor: "#fc203d",
         mainButtonFontHoverColor: "#deecf0",
         navBgColor: "transparent",
      },
   });
   const { themeProps, activeTheme, defaultTheme, allExpenses } = expenses;
   // Handling themes
   const setPropVal = (prop, newVal) => {
      document.documentElement.style.setProperty(prop, newVal);
   };

   const setThemeDefault = useCallback(
      (obj) => {
         const { defaultBgColor, defaultBgSecColor, mainColor, secondaryColor, mainButtonColor, mainButtonFontColor, mainButtonHoverColor, mainButtonFontHoverColor, navBgColor } = obj;
         setPropVal(themeProps.defaultBgColor, defaultBgColor);
         setPropVal(themeProps.defaultBgSecColor, defaultBgSecColor);
         setPropVal(themeProps.mainColor, mainColor);
         setPropVal(themeProps.secondaryColor, secondaryColor);
         setPropVal(themeProps.mainButtonColor, mainButtonColor);
         setPropVal(themeProps.mainButtonFontColor, mainButtonFontColor);
         setPropVal(themeProps.mainButtonHoverColor, mainButtonHoverColor);
         setPropVal(themeProps.mainButtonFontHoverColor, mainButtonFontHoverColor);
         setPropVal(themeProps.navBgColor, navBgColor);
      },
      [themeProps.defaultBgColor, themeProps.defaultBgSecColor, themeProps.mainColor, themeProps.secondaryColor, themeProps.mainButtonColor, themeProps.mainButtonFontColor, themeProps.mainButtonHoverColor, themeProps.mainButtonFontHoverColor, themeProps.navBgColor]
   );
   setThemeDefault(activeTheme);
   const themeColorPickerHandler = (e) => {
      setExpenses((prev) => {
         return { ...prev, activeTheme: { ...prev.activeTheme, [e.target.name]: e.target.value } };
      });
   };
   const onClickSetThemeHandler = () => {
      localStorage.setItem("expenses", JSON.stringify(expenses));
      swal({
         text: "Theme Saved",
         icon: "success",
         timer: 700,
      });
   };
   // getting data from storage at start of app
   useEffect(() => {
      const storage = localStorage.getItem("expenses");
      if (storage) {
         setExpenses(JSON.parse(storage));
      }
   }, []);
   console.log(activeTheme);
   // handling value of input onChange
   const inputOnChangeHandler = (e) => {
      setExpenses((prev) => {
         return { ...prev, expense: { ...prev.expense, [e.target.name]: e.target.value } };
      });
   };
   // Handling adding new expense
   const addExpenseHandler = (e) => {
      e.preventDefault();
      if (Number(expenses.expense.amount) != "0" && expenses.expense.date !== "" && expenses.expense.title !== "") {
         setExpenses((prev) => {
            return { ...prev, dateFilterByMonth: "", allExpenses: [...prev.allExpenses, expenses.expense], totalAmount: expenses.totalAmount + Number(expenses.expense.amount) };
         });
         swal({
            title: "GREAT",
            icon: "success",
            text: "Expense Added Successfully",
            button: false,
            timer: 1000,
         });

         setExpenses((prev) => {
            return { ...prev, expense: { title: "", amount: "", date: "" } };
         });
      } else {
         swal({
            title: "Ops..!",
            icon: "error",
            text: "Please add valid amount",
            button: false,
            timer: 1000,
         });
      }
   };
   // sorting by amount (des&ase)
   const sortHandler = () => {
      if (expenses.sortFlag) {
         let list = [...expenses.allExpenses];
         list.sort((a, b) => {
            return Number(a.amount) - Number(b.amount);
         });
         setExpenses((prev) => {
            return { ...prev, allExpenses: list, sortFlag: false };
         });
      } else {
         let list = [...expenses.allExpenses];
         list.sort((a, b) => {
            return Number(b.amount) - Number(a.amount);
         });
         setExpenses((prev) => {
            return { ...prev, allExpenses: list, sortFlag: true };
         });
      }
   };
   // Handling feltring per month
   const dateFilterByMonth = (e) => {
      setFilteredMonth(e.target.value);
   };
   // handling expense delete
   const deleteExpense = (index) => {
      let list = [...allExpenses];
      list.splice(index, 1);
      setExpenses((prev) => {
         return { ...prev, allExpenses: list, totalAmount: expenses.totalAmount - Number(allExpenses[index].amount) };
      });
      if (index == "0") {
         localStorage.removeItem("expenses");
      }
   };
   // Destructing props from expenses store
   // handling app storage using localstorage and
   const storageMemo = useMemo(() => {
      if (allExpenses.length > 0) {
         localStorage.setItem("expenses", JSON.stringify(expenses));
      }
   }, [expenses, allExpenses.length]);
   return <Store.Provider value={{ expenses: expenses, onClickSetThemeHandler, themeColorPickerHandler, addExpenseHandler, setThemeDefault, inputOnChangeHandler, sortHandler, dateFilterByMonth, deleteExpense, filteredMonth }}>{props.children}</Store.Provider>;
};
export default Store;
