import React, { useContext } from "react";
import ItemList from "./ItemList";
import { AppContext } from "../context/AppContext";

const ExpenseRecord = () =>{
    const { expenses } = useContext(AppContext);

    return (
        <ul className="list-group">
            {expenses.map((expense)=>(
                <ItemList id={expense.id} name={expense.name} price={expense.price}/>
            ))}
        </ul>
        
    );
};

export default ExpenseRecord;