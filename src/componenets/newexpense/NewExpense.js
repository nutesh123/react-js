
import React from "react" ;

import './NewExpense.css' ;
import './Expenseform' ;
import Expenseform from "./Expenseform";

const NewExpense =(props)=>{

  const getexpenseformdeta=(formdeta)=>{

    const expensedeta={
      ...formdeta
    }
    console.log(expensedeta)

    props.sentdetatoappjs(expensedeta)

  }

    return (
        <div className="new-expense">
         <Expenseform Expenseformdeta={getexpenseformdeta}/>
        </div>
    )
}

export default NewExpense;