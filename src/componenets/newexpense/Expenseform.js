
import React, { useState } from "react";

import './Expenseform.css' ;

const Expenseform=()=>{

   const [title, newtitle]= useState('')
   const [amount,newamount]=useState('')
   const [date,newdate]=useState('')


    function titlechangehandler (event){
        console.log(event.target.value)

    }
    function amountchangehandler (){

    }

    function datechangehandler(){

    }

    return(<form>
        <div className="new-expense__controls">
            <div className="new-expense__controls">
            <label>Title</label>
            <input type='text' onChange={titlechangehandler}/>
            </div>
            <div className="new-expense__controls">
            <label>Amount</label>
            <input type='number' onChange={amountchangehandler}/>
            </div>
            <div className="new-expense__controls">
            <label>Date</label>
            <input type='date' onChange={datechangehandler}/>
            </div>
    
                <button>Add Expense</button>
        
        </div>
    </form>)
}

export default Expenseform ;