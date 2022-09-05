
import Expensedate from "./componenets/expenses/Expensedate";
import Expensedetails from "./componenets/expenses/Expensedetails";
import Expenseitem from "./componenets/expenses/Expenseitem";


let  App = ()=> {

    const expenses = [
        {
          id: 'e1',
          title: 'Toilet Paper',
          amount: 94.12,
          date: new Date(2020, 7, 14),
        },
        { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
        {
          id: 'e3',
          title: 'Car Insurance',
          amount: 294.67,
          date: new Date(2021, 2, 28),
        },
        {
          id: 'e4',
          title: 'New Desk (Wooden)',
          amount: 450,
          date: new Date(2021, 5, 12),
        },
        {   
            ID : 'e5' ,
            title : 'rent',
            amount : 4000,
            date: new Date(2021, 2, 28),
        }
      ];

    return(
        <div>
            <h1>expense item details</h1>

          <Expensedate date={expenses[0].date}></Expensedate>
          <Expensedetails title={expenses[0].title }  amount={expenses[0].amount}></Expensedetails>
          <Expensedate date={expenses[1].date}></Expensedate>
          <Expensedetails title={expenses[1].title }  amount={expenses[0].amount}></Expensedetails>
          <Expensedate date={expenses[2].date}></Expensedate>
          <Expensedetails title={expenses[2].title }  amount={expenses[0].amount}></Expensedetails>
          <Expensedate date={expenses[3].date}></Expensedate>
          <Expensedetails title={expenses[3].title }  amount={expenses[0].amount}></Expensedetails>
          <Expensedate date={expenses[4].date}></Expensedate>
          <Expensedetails title={expenses[4].title }  amount={expenses[0].amount}></Expensedetails>
          

        </div>
    ) ;
}

export default App;