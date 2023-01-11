import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";
const expensesInit = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  }, {
    id: "e2",
    title: "Toilet Paper",
    amount: 100.12,
    date: new Date(2020, 9, 14),
  },
  {
    id: "e3",
    title: "Toilet Paper",
    amount: 500,
    date: new Date(2020, 1, 14),
  },
  { id: "e4", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e5",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e6",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  }, {
    id: "e7",
    title: "New Desk (Wooden)",
    amount: 200,
    date: new Date(2021, 0, 12),
  },
  {
    id: "e8",
    title: "New Desk (Wooden)",
    amount: 600,
    date: new Date(2021, 11, 12),
  },
];
function App() {
  const [expenses, setExpenses] = useState(expensesInit);

  const addExpenseHandler = (expense) => {
    // console.log(expense)
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
    // console.log(expenses)
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense items={expenses} />
    </div>
  );
}

export default App;
