import React ,{useState} from 'react'
import "./Expenses.css"
import Card from './Card';
import ExpenseFilter from './ExpenseFilter';
import ExpenseContent from './ExpenseContent';
import ExpensesChart from './ExpensesChart';
function Expenses(props) {
      const [filteredYear, setFilteredYear] = useState('2019');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

const filteredexpenses=props.items.filter(expense=>{
    return expense.date.getFullYear().toString()===filteredYear;
})
//code to render a message when the expenses are empty : 

    return (
      <Card className="expenses">
    <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
     <ExpensesChart expenses={filteredexpenses}/>
      <ExpenseContent items={filteredexpenses}></ExpenseContent>
      </Card>
    );
}
export default Expenses;