import React, {useState} from 'react';
import './NewExpenseForm.css';
export default function NewExpenseForm (props) {
  /*use one state only*/
  /*
    const [userinput , setuserinputs]=useState({title:'',amount:'',date:''})
    const changetitle=(event)=>{
        setuserinputs({...userinput,title:event.target.value},)
    }
 const changeamount=(event)=>{
        setuserinputs({...userinput,amount:event.target.value},)
    }
 const changedate=(event)=>{
        setuserinputs({...userinput,date:event.target.value},)
    }

    */
  /*safer (اكثر امانا) way to use one state only */
  /*
   const [userinput , setuserinputs]=useState({title:'',amount:'',date:''})

   const changetitle=(event)=>{
       setuserinputs((prevState)=>{
           return {...prevState,title:event.target.value};
       })
   }
   */
  
  const [usertitle, settitle] = useState ('');
  const [useramount, setamount] = useState ('');
  const [userdate, setdate] = useState ('');

  const changetitle = event => {
    settitle (event.target.value);
  };
  const changeamount = event => {
    setamount (event.target.value);
  };

  const changedate = event => {
    setdate (event.target.value);
  };
  const submithandler = event => {
    event.preventDefault ();

    const userdata = {
      title: usertitle,
      amount: +useramount,
      date: new Date (userdate),
    };
    props.onSaveData (userdata);

    settitle ('');
    setamount ('');
    setdate ('');
    
    setaddnew(false)
  };
  const [addnew,setaddnew]=useState(false);
    const enableedit=()=>{
      setaddnew(true);
    }
    const disableedit=()=>{
      setaddnew(false)
    }
  let formcontents = (
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label>Title</label>
        <input type="text" required value={usertitle} onChange={changetitle} />
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        <input
          required
          type="number"
          value={useramount}
          min="1"
          step="0.01"
          onChange={changeamount}
        />
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input
          required
          value={userdate}
          type="date"
          min="2019-1-1"
          max="2022-12-31"
          onChange={changedate}
        />
      </div>
      <div className="new-expense__actions">
        <button onClick={disableedit}>Cancel</button>

        <button type="submit">Add Expense</button>
      </div>
    </div>
  );
  
    if (addnew===false){
      formcontents= <button onClick={enableedit}>Add new expense</button>;
    }
  
    return (
    <form onSubmit={submithandler}>
      
      {formcontents}
    </form>
  );
}
