import React, { useState } from "react";

import "./NewExpense.css";
import "./Expenseform";
import Expenseform from "./Expenseform";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  const getexpenseformdeta = (formdeta) => {
    const expensedeta = {
      ...formdeta,
    };
    props.sentdetatoappjs(expensedeta);
  };

  return (
    <div className="new-expense">
      {!isEditing && (<button onClick={startEditingHandler}>add new expense</button>)}

      {isEditing && ( <
                Expenseform onSaveExpenseData={getexpenseformdeta}
                onCancal = { stopEditingHandler }
                />
            )
          }
    </div>
  );
   }

export default NewExpense;
