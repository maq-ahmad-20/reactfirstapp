
import './App.css';

import Expense from './Components/Expense';
import ExpenseForm from './Components/ExpenseForm';
import { useState } from 'react';
const expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date().toDateString(),
    location: "India"
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date().toDateString(), location: "India" },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date().toDateString(),
    location: "India"
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date().toDateString(),
    location: "India"
  },
];

function App() {


  const [oldExpenses, setExpenses] = useState(expenses);

  const onSaveExpenseDataHandler = (enteredExpenseDate) => {
    const expenseData = { ...enteredExpenseDate, id: Math.random().toString() };
    console.log(expenseData)
    expenses.push(expenseData)
    setExpenses(expenses);

  }



  return (
    <div className="App">

      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
      {oldExpenses.map((expenses) => (
        <Expense key={expenses.id} title={expenses.title} amount={expenses.amount} date={expenses.date}
          location={expenses.location} />
      ))}

    </div>
  );

}

export default App;
