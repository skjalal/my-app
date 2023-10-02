import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;
  } else {
    return (
      <ul className="expenses-list">
        {props.items.map((d) => (
          <ExpenseItem
            key={d.id}
            title={d.title}
            amount={d.amount}
            date={d.date}
          />
        ))}
      </ul>
    );
  }
};

export default ExpensesList;
