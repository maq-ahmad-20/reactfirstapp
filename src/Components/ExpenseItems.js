import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
function ExpenseItem({ title, amount, date, location }) {


    return (
        <div className='expense-item'>
            <ExpenseDate date={date} />
            <ExpenseDetails title={title} amount={amount} location={location} />

        </div>

    );
}

export default ExpenseItem;


