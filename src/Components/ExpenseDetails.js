import { useState } from "react";

function ExpenseDetails({ title, amount, location }) {

    const [oldAmount, setAmount] = useState(amount);
    const handleAmount = () => {
        setAmount(100);
    }

    return (

        <div className='expense-item__description'>
            <h2>{title}</h2>
            <div className='expense-item__price'>{oldAmount}
                <button onClick={handleAmount}>AddExpense</button>
            </div>
            <h2>{location}</h2>
        </div>

    );
}

export default ExpenseDetails;