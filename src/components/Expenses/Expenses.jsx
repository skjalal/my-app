import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2019");
  const changeYearHandler = (selectedValue) => {
    setSelectedYear(selectedValue);
  };

  const { expenses } = props;
  const items = expenses.map((d) => (
    <ExpenseItem key={d.id} title={d.title} amount={d.amount} date={d.date} />
  ));

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selectedYear}
        onChangeYear={changeYearHandler}
      />
      {items}
    </Card>
  );
};

export default Expenses;
