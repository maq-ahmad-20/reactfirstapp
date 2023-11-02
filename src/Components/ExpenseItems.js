import './ExpenseItem.css'

function ExpenseItem({ title, amount, date, location }) {


    return (
        <div className='expense-item'>
            <div>{date}</div>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>{amount}</div>
                <h2>{location}</h2>
            </div>

        </div>

    );
}

export default ExpenseItem;


