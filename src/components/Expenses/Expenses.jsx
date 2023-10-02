import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const { expenses } = props;
  const items = expenses.map((d) => (
    <ExpenseItem title={d.title} amount={d.amount} date={d.date} />
  ));
  return <Card className="expenses">{items}</Card>;
};

export default Expenses;
