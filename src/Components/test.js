//Example of using useState from hooks 

/*
import "./ExpenseItem.css"
import React,{useState} from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
function ExpenseItem(props) {
  let [currentstate,updateState]=useState(props.title);
  const click=()=>{
    updateState("new Title")
    console.log("ok");
  }
  return (
    <Card className="expense-item">
    <ExpenseDate
    date={props.date}
    />
      <div className="expense-item__description">
        <h2 >{currentstate}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>

      <button onClick={click}>Click HERE!</button>
    </Card>
  );
}
export default ExpenseItem;
*/