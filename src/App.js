
import './App.css';

import Expense from './Components/Expense';
import ExpenseForm from './Components/ExpenseForm';
import { useState } from 'react';
import ExpenseFilter from './Components/ExpenseFilter';
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
  const [filteredYear, setFilteredYear] = useState('2023');

  const onSaveExpenseDataHandler = (enteredExpenseDate) => {
    const expenseData = { ...enteredExpenseDate, id: Math.random().toString() };
    // console.log(expenseData)
    // expenses.push(expenseData)
    setExpenses((prevexpenses) => {
      return [expenseData, ...prevexpenses]
    });

  }


  const onchangeFilter = (selectedYear) => {
    setFilteredYear(() => {
      return selectedYear;
    })
  }

  const filteredList = oldExpenses.filter((expense) => new Date(expense.date).getFullYear().toString() === filteredYear)


  return (
    <div className="App">

      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />

      <ExpenseFilter selected={filteredYear} onchangeFilter={onchangeFilter} />
      {/* {filteredList.length !== 0 ? (filteredList.map((expenses) => (
        <Expense key={expenses.id} title={expenses.title} amount={expenses.amount} date={expenses.date}
          location={expenses.location} />
      ))) : (<p>No Expenses Found</p>)} */}

      {filteredList.length === 0 && <p>Only single Expense here. Please add more...</p>}
      {filteredList.length > 0 && filteredList.map((expenses) => (
        <Expense key={expenses.id} title={expenses.title} amount={expenses.amount} date={expenses.date}
          location={expenses.location} />
      ))}

    </div>
  );

}

export default App;
