import { createContext, useReducer } from "react"; 
import { v4 as uuidv4 } from 'uuid';



const AppReducer = (state, action) => {
    switch(action.type) {
        case 'NEW_EXPENSE':
            return {
                ...state, 
                expenses: [...state.expenses, action.payload],
            };
        
        case 'DELETE_EXP':
            return {
                ...state, 
                expenses: state.expenses.filter((expense)=>expense.id !== action.payload), 
            }; 
        case 'CHG_CURRENCY':
                action.type = "DONE";
                state.currency = action.payload;
                return {
                    ...state
                };
        case 'SET_BUDGET':
                action.type = "DONE";
                state.budget = action.payload;
    
                return {
                    ...state,
                };
        default:
            return state; 
    }
};

const initialState = {
    budget: 3000, 
    expenses: [
        {id: uuidv4(), name: "Groceries", price: 50}, 
        {id: uuidv4(), name: "Flight to LA", price: 350}, 
        {id: uuidv4(), name: "Rent", price: 1200}, 
        {id: uuidv4(), name: "Coffee", price: 20}, 
    ],
    currency: '$'
};  

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    return(<AppContext.Provider 
        value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
        currency: state.currency
        }}>
            {props.children}
        </AppContext.Provider>)
}; 