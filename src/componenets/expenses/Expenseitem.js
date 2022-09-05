import Expensedate from "./Expensedate";
import Expensedetails from "./Expensedetails";
import './Expense.css' ;



function Expenseitem()
{

    return (
<div className="expense-item h2">

    
<Expensedetails></Expensedetails>

<Expensedate></Expensedate>


</div>
)

}

export default Expenseitem ;