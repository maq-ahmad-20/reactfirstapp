import { useState } from "react";
function ExpenseForm({ onSaveExpenseData, goBackToAddExpense }) {
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

    // Multi -state apporch 
    // const[userInput , setuserInput] = useState({
    //     enteredTitle :'',
    //     enteredAmount :'',
    //     enteredDate :'',
    //     enteredLocation : ''
    // })

    // function amountChangeHanlder(val) {
    //     setuserInput((prev)=> {

    //        return  {...prev, enteredAmount :val} 
    //     });
    // }
    // function dateChangeHanlder(val) {
    //     setuserInput( {

    //         ...userInput, enteredDate :val 
    //     });
    // }
    // function locationChangeHanlder(val) {
    //     setuserInput( {

    //         ...userInput, enteredLocation :val 
    //     });
    // }


    // function hadleOnchangeTitle(val) {
    //     setuserInput( {

    //         ...userInput, enteredTitle :val 
    //     });
    // }

    function handleSubmitForm(e) {
        e.preventDefault();
        const obj = {
            "title": enteredTilte,
            "amount": enteredAmount,
            "date": new Date(enteredDate).toDateString(),
            "location": enteredLocation
        }
        //console.log(obj);
        onSaveExpenseData(obj);
        setAmount(''); setDate(''); setEnteredTitle(''); setLocation('');
    }
    // using value in inpu provides two way binding in input ir after submit it clear the form inputs

    return (
        <div>



            <form onSubmit={(e) => { handleSubmitForm(e) }} >
                <label htmlFor="tit">title</label>
                <input type="text" value={enteredTilte} required id="tit" onChange={(e) => { hadleOnchangeTitle(e.target.value) }} >

                </input>
                <label>Amount</label>
                <input type="number" value={enteredAmount} required onChange={(e) => { amountChangeHanlder(e.target.value) }}></input>
                <label>Date</label>
                <input type="date" value={enteredDate} onChange={(e) => { dateChangeHanlder(e.target.value) }}></input>
                <label>location</label>
                <input type="text" value={enteredLocation} onChange={(e) => { locationChangeHanlder(e.target.value) }}></input>
                <button type="submit" >AddExpense</button>
                <button onClick={goBackToAddExpense}>Cancel</button>
            </form>

        </div>
    )
}

export default ExpenseForm;