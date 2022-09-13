
import React, { useState } from "react";

import './Expenseform.css' ;

const Expenseform=(props)=>{

   const [title, newtitle]= useState('')
   const [amount,newamount]=useState('')
   const [date,newdate]=useState('')


    function titlechangehandler (event){
        newtitle(event.target.value)

    }
    function amountchangehandler (event){
        newamount(event.target.value)
    }

    function datechangehandler(event){
        newdate(event.target.value)
    }

    const submitformhandler=(event)=>{
        event.preventDefault();

        const expenseObj = {
            Titlename:title ,
            Amount:amount ,
            Date:new Date(date) 
        } ;
        
        props.Expenseformdeta(expenseObj)

        console.log(expenseObj)
        newtitle('')
        newamount('')
        newdate('')
    }

    return(<form onSubmit={submitformhandler}>
        <div className="new-expense__controls">
            <div className="new-expense__controls">
            <label>Title</label>
            <input type='text' value={title} onChange={titlechangehandler}/>
            </div>
            <div className="new-expense__controls">
            <label>Amount</label>
            <input type='number' value={amount} onChange={amountchangehandler}/>
            </div>
            <div className="new-expense__controls">
            <label>Date</label>
            <input type='date' value={date} onChange={datechangehandler}/>
            </div>
    
                <button>Add Expense</button>
        
        </div>
    </form>)
}

export default Expenseform ;