
import './App.css';
import ExpenseItem from './Components/ExpenseItems';

function App() {
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


  return (
    <div className="App">

      {expenses.map((expenses) => (
        <ExpenseItem title={expenses.title} amount={expenses.amount} date={expenses.date}
          location={expenses.location} />
      ))}

    </div>
  );

}

export default App;
