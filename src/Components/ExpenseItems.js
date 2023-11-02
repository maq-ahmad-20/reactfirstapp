import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import { useState } from 'react';
function ExpenseItem({ title, amount, date, location }) {
    const [newTitle, setTitle] = useState(title)

    const handleClicked = () => {
        setTitle("UpdatedTitle")
        console.log("Clicked..." + newTitle)
    }
    const handleDelete = () => {
        console.log("Deleted...")
    }

    return (
        <div className='expense-item'>
            <ExpenseDate date={date} />
            <ExpenseDetails title={newTitle} amount={amount} location={location} />

            <button onClick={handleClicked}> Change Title</button>
            <button onClick={handleDelete}>Delete</button>

        </div>


    );
}

export default ExpenseItem;


