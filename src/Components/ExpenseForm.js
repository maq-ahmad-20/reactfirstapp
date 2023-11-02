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
            "date": enteredDate,
            "location": enteredLocation
        }
        console.log(obj);

    }

    return (
        <div>



            <form onSubmit={(e) => { handleSubmitForm(e) }} >
                <label htmlFor="tit">title</label>
                <input type="text" required id="tit" onChange={(e) => { hadleOnchangeTitle(e.target.value) }} >

                </input>
                <label>Amount</label>
                <input type="number" required onChange={(e) => { amountChangeHanlder(e.target.value) }}></input>
                <label>Date</label>
                <input type="date" onChange={(e) => { dateChangeHanlder(e.target.value) }}></input>
                <label>location</label>
                <input type="text" onChange={(e) => { locationChangeHanlder(e.target.value) }}></input>
                <button type="submit" >AddExpense</button>
            </form>

        </div>
    )
}

export default ExpenseForm;