import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Expenses = () =>
{
    const { expenses } = useContext(AppContext);
    const expSum = expenses.reduce((total, item) => {
		return (total += item.price);
	}, 0);

    return (
        <div className="alert alert-dark">
            <span>Total Spent: ${expSum}</span>
        </div>
    );
};

export default Expenses; 