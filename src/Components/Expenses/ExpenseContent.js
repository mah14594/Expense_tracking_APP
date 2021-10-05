import React from 'react'
import ExpenseItem from './ExpenseItem'
export default function ExpenseContent(props) {
    let content=<p>There is no expenses Found in this year</p>    
if (props.items.length>0){
    content=props.items.map((expense,index) => (
            <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          /> 
        )
        )
}

    return (
        <div>
    <div className="expenses-content mt-5 text-white text-center">{content}</div>

        </div>
    )
}
