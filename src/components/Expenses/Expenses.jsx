import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const { expenses } = props;
  let itemList = [];
  expenses.forEach((element) => {
    itemList.push(
      <ExpenseItem
        title={element.title}
        amount={element.amount}
        date={element.date}
      />
    );
  });
  return <Card className="expenses">{itemList}</Card>;
};

export default Expenses;
