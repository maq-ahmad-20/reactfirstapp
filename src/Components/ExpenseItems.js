import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
function ExpenseItem({ title, amount, date, location }) {

    const handleClicked = () => {
        console.log("Clicked...")
    }
    const handleDelete = () => {
        console.log("Deleted...")
    }

    return (
        <div className='expense-item'>
            <ExpenseDate date={date} />
            <ExpenseDetails title={title} amount={amount} location={location} />

            <button onClick={handleClicked}> Change Title</button>
            <button onClick={handleDelete}>Delete</button>

        </div>


    );
}

export default ExpenseItem;


