import React,{useState} from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

const  initial_expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', 
    title: 'New TV', 
    amount: 799.49, 
    date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];



function App() {
  const [expenses,setUserexpenses]=useState(initial_expenses)
  //to make the list contain nothing at the first use of the programm :
    // const [expenses,setUserexpenses]=useState([])

  const addnewdata=(expense)=>{
    
setUserexpenses( (prevExpenses) => 
{
  return [expense, ...prevExpenses];
});
  };
  return (
    <div>
      <NewExpense onAddnewData={addnewdata} />
<Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
