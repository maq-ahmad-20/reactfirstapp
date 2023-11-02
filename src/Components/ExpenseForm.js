import { useState } from "react";
function ExpenseForm() {
    const [enteredTilte, setEnteredTitle] = useState('');
    const [enteredAmount, setAmount] = useState('');
    const [enteredDate, setDate] = useState('');
    const [enteredLocation, setLocation] = useState('');

    function amountChangeHanlder(val) {
        setAmount(val);
    }
    function dateChangeHanlder(val) {
        setDate(val);
    }
    function locationChangeHanlder(val) {
        setLocation(val);
    }


    function hadleOnchangeTitle(val) {
        setEnteredTitle(val);
        console.log(val)
    }

    return (
        <div>



            <form>
                <label htmlFor="tit">title</label>
                <input type="text" required id="tit" onChange={(e) => { hadleOnchangeTitle(e.target.value) }} >

                </input>
                <label>Amount</label>
                <input type="number" required onChange={(e) => { amountChangeHanlder(e.target.value) }}></input>
                <label>Date</label>
                <input type="date" onChange={(e) => { dateChangeHanlder(e.target.value) }}></input>
                <label>location</label>
                <input type="text" onChange={(e) => { locationChangeHanlder(e.target.value) }}></input>
                <button >AddExpense</button>
            </form>

        </div>
    )
}

export default ExpenseForm;