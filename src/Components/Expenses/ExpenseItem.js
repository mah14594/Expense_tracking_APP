import "./ExpenseItem.css"
import React  from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
function ExpenseItem(props) {
  //console.log(ok)   : this to show how many times this component is evaulated
  //in the first time its evaluated as much as its called in the expenses component or any other components 
  // when i click on any button this component will be evaulated once ! 
  /*
  let [currentstate,updateState]=useState(props.title);
  const click=()=>{
    updateState("new Title")
    console.log("ok");
  }
  */
  return (

    <Card className="expense-item">
    <ExpenseDate
    date={props.date}
    />
      <div className="expense-item__description">
        <h2 >{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>

    </Card>
  );
}
export default ExpenseItem;
