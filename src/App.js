import Expensedate from "./componenets/expenses/Expensedate";
import Expensedetails from "./componenets/expenses/Expensedetails";
import Expenseitem from "./componenets/expenses/Expenseitem";
import Card from './componenets/UI/Card' ; 
import NewExpense from "./componenets/newexpense/NewExpense";
import './componenets/expenses/Expense.css' ;
import React,{useState} from 'react' ;

const expensesobj = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    ID: "e5",
    title: "rent",
    amount: 4000,
    date: new Date(2021, 2, 28),
  },
];

let App = (props) => {

  const [inputdeta ,updateinput ]=useState(expensesobj)

 
  const getnewexpensedeta=(newexpensedeta)=>{
    const deta=[newexpensedeta,...inputdeta]
     updateinput(deta)
  }

  return (
    <div>
      <NewExpense sentdetatoappjs={getnewexpensedeta}/>
      <Expensedetails expenses={inputdeta}/>
    </div>
  );
};

export default App;
