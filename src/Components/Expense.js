import ExpenseItem from './ExpenseItems';
import './Expense.css';
function Expense({ title, amount, date, location }) {

    return (

        <div className="expenses">

            <ExpenseItem title={title} amount={amount} date={date} location={location} />

        </div>
    )
}

export default Expense;