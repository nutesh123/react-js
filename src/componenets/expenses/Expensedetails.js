import React , {useState} from "react";

import App from "../../App";
import Expenseitem from "./Expenseitem";
import ExpensesFilter from "../Filter";

function Expensedetails(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpnses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  console.log(props.expenses);

  return (
    <div className="listclass">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />{' '}
      {filteredExpnses.map((xpens) => (
        <Expenseitem
          date={xpens.date}
          title={xpens.title}
          amount={xpens.amount}
        />
      ))}

      <button className="delete-button">delete expense</button>
    </div>
  );
}

export default Expensedetails;
