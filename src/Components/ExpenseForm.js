//import { useState } from "react";
function ExpenseForm() {
    //const[oldTilte , seTTitle] = useState('');

    function hadleOnchange(val) {
        console.log(val)
    }

    return (
        <div>



            <form>
                <label htmlFor="tit">title</label>
                <input type="text" required id="tit" onChange={(e) => { hadleOnchange(e.target.value) }} >

                </input>
                <label>Amount</label>
                <input type="number" required></input>
                <label>Date</label>
                <input type="date"></input>
                <label>location</label>
                <input type="text"></input>
                <button >AddExpense</button>
            </form>

        </div>
    )
}

export default ExpenseForm;