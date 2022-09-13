import Expensedate from "./componenets/expenses/Expensedate";
import Expensedetails from "./componenets/expenses/Expensedetails";
import Expenseitem from "./componenets/expenses/Expenseitem";
import Card from './componenets/UI/Card' ; 
import NewExpense from "./componenets/newexpense/NewExpense";
import './componenets/expenses/Expense.css' ;

let App = (props) => {
  const expenses = [
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

  const getnewexpensedeta=(newexpensedeta)=>{
     console.log(newexpensedeta)
  }

  return (
    <div>
      <NewExpense sentdetatoappjs={getnewexpensedeta}/>


      <div className="listclass">
        <Expenseitem
          date={expenses[0].date}
          title={expenses[0].title}
          amount={expenses[0].amount}
        />
        <Expenseitem
          date={expenses[1].date}
          title={expenses[1].title}
          amount={expenses[1].amount}
        />
        <Expenseitem
          date={expenses[2].date}
          title={expenses[2].title}
          amount={expenses[2].amount}
        />
        <Expenseitem
          date={expenses[3].date}
          title={expenses[3].title}
          amount={expenses[3].amount}
        />
        <Expenseitem
          date={expenses[4].date}
          title={expenses[4].title}
          amount={expenses[4].amount}
        />
        <button className="delete-button">delete expense</button>
      </div>
    </div>
  );
};

export default App;
