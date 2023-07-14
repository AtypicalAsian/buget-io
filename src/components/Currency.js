import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Currency = () => {
    const { currency } = useContext(AppContext); 
    return (
        <text>{currency}</text>
    )
};

export default Currency; 