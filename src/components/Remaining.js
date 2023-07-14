import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Remaining = () => {
    const { expenses, budget } = useContext(AppContext);
    const expSum = expenses.reduce((total, item) => {
		return (total += item.price);
	}, 0);

    const negMoney = expSum > budget ? 'alert-danger' : 'alert-primary';


    return (
        <div className={`alert ${negMoney}`}>
            <span>Remaining: ${budget-expSum}</span> 
        </div>
    );
};

export default Remaining;