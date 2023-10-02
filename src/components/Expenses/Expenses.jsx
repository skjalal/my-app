import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2019");
  const changeYearHandler = (selectedValue) => {
    setSelectedYear(selectedValue);
  };

  const { expenses } = props;
  const filteredExpenses = expenses.filter(
    (f) => f.date.getFullYear() === +selectedYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selectedYear}
        onChangeYear={changeYearHandler}
      />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
