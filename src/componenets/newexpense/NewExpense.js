
import React from "react" ;

import './NewExpense.css' ;
import './Expenseform' ;
import Expenseform from "./Expenseform";

const NewExpense =()=>{
    return (
        <div className="new-expense">
         <Expenseform></Expenseform>
        </div>
    )
}

export default NewExpense;