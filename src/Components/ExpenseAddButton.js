
import ExpenseForm from "./ExpenseForm";
import { useState } from 'react';

function ExpenseAddButton({ onSaveExpenseDataHandler }) {

    const [clicked, setClicked] = useState(false);


    function addExpenseClickHandler() {
        setClicked((prev) => {

            return !prev;
        })
    }
    function goBackToAddExpense() {
        setClicked(false);


    }

    return (
        <div>
            <button onClick={addExpenseClickHandler}>AddExpense</button>
            {clicked && <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} goBackToAddExpense={goBackToAddExpense} />}


        </div>
    )
}

export default ExpenseAddButton;