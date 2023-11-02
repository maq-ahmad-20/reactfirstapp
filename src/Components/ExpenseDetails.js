

function ExpenseDetails({ title, amount, location }) {

    return (

        <div className='expense-item__description'>
            <h2>{title}</h2>
            <div className='expense-item__price'>{amount}</div>
            <h2>{location}</h2>
        </div>

    );
}

export default ExpenseDetails;