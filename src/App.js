import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import Expenses from "./components/Expenses";
import ExpenseRecord from "./components/ExpenseRecord";
import NewExpense from "./components/NewExpense";
import { AppProvider } from "./context/AppContext";

const App = () => {
  return (
    <AppProvider>
      <div className="container">
      <h1 className="mt-3">Budget & Expense Tracker</h1>
      <div className="row mt-3">
        <div className="col-sm"><Budget/></div>
        <div className="col-sm"> <Remaining/></div>
        <div className="col-sm"> <Expenses/></div>
      </div>
      <h3 className="mt-3">Expense Record</h3> 
      <div className="row mt-3">
        <div className="col-sm"><ExpenseRecord/></div>
      </div>
      <h3 className="mt-4">Add New Expense</h3> 
      <div className="row mt-3">
        <div className="col-sm"><NewExpense/></div>
      </div>
    </div>


    </AppProvider>
  )
}

export default App; 