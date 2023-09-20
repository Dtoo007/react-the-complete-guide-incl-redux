
import './App.css'
import ExpenseItems from './Components/ExpenseItems'

function App() {
  const expenseList = [
    {
      id: "e1",
      product: "Internet Bill",
      price: 99,
      date: new Date(2023, 6, 1),
    },
    {
      id: "e4",
      product: "Ring Light",
      price: 70,
      date: new Date(2023, 7, 14),
    },
    {
      id: "e4",
      product: "Airpod Pro",
      price: 370,
      date: new Date(2023, 8, 20),
    },
    {
      id: "e2",
      product: "iPhone 15",
      price: 450,
      date: new Date(2023, 9, 18),
    },
    {
      id: "e3",
      product: "Hp 1030 G3",
      price: 250,
      date: new Date(2023, 10, 19),
    },
    {
      id: "e4",
      product: "Airpod Pro",
      price: 370,
      date: new Date(2023, 11, 20),
    },
  ];

  return (
    <>
      <h1>Let's get started</h1>
      <ExpenseItems {...expenseList[0]} />
      <ExpenseItems {...expenseList[1]} />
      <ExpenseItems {...expenseList[2]} />
      <ExpenseItems {...expenseList[3]} />
      <ExpenseItems {...expenseList[4]} />
      <ExpenseItems {...expenseList[5]} />
    </>
  );
}

export default App
