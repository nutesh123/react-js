import React , {useState} from "react";

import App from "../../App";
import Expenseitem from "./Expenseitem";
import ExpensesFilter from "../Filter";

function Expensedetails(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  console.log(props.expenses);

  return (
    <div className="listclass">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {props.expenses.map((xpens) => (
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
