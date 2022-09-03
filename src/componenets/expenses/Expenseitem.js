import Expensedate from "./Expensedate";
import Expensedetails from "./Expensedetails";
import './Expense.css' ;



function Expenseitem(props){

    const date= new Date(2021,2,1);
    const title= 'car insurance';
    const amount=5363 ;


    return (
<div className='expense-item'>

<Expensedate date ={props.date} />

<Expensedetails amount={props.amount} />

</div>
)
}

export default Expenseitem;