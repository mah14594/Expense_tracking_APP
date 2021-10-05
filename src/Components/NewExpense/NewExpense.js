import React from 'react'
import NewExpenseForm from './NewExpenseForm'
import "./NewExpense.css"
export default function NewExpense(props) {
    const savedata=(userdata)=>{
            const expensedata={
                ...userdata,id:Math.random().toString()
            }
            props.onAddnewData(expensedata)
    }


    return (
        <div className="new-expense">
            <NewExpenseForm onSaveData={savedata}/>
        </div>
    )
}
