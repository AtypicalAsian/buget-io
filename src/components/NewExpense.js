import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { v4 as uuidv4 } from "uuid";

const NewExpense = () => {
    const { dispatch } = useContext(AppContext);
    const [name, setName] = useState(''); 
    const [price, setCost] = useState('');
    const onSubmit = (event) => {
        event.preventDefault(); //Prevent page from reloading
        const expense = {
            id: uuidv4(),
            name: name, 
            price: parseInt(price),
        };

        dispatch({
            type: 'NEW_EXPENSE', 
            payload: expense, 
        });
        setName('');
        setCost('');
    };

    return (
        <form onSubmit={onSubmit}>
            <div className="row">
                <div className="col-sm col-lg-4">
                    <label for="name">Name</label>
                    <input required="required" type="text" className="form-control" id="name" value={name} onChange={(event)=>setName(event.target.value)}/>
                    
                </div>
                <div className="col-sm col-lg-4">
                    <label for="cost">Cost</label>
                    <input required="required" type="number" className="form-control" id="cost" value={price} onChange={(event)=>setCost(event.target.value)}/>
                </div>
                <div className="col-sm mt-4">
                    <button type="submit" className="btn btn-primary">Save</button>
                </div>
            </div>
        </form>
    );
};

export default NewExpense; 