import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isNewExpense, setIsNewExpense] = useState(true);
  const saveExpenseHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    props.onAddExpense(expenseData);
    setIsNewExpense(true);
  };

  const clickHadnler = () => {
    setIsNewExpense(false);
  };

  const cancelHadnler = () => {
    setIsNewExpense(true);
  };

  return (
    <div className="new-expense">
      {isNewExpense && <button onClick={clickHadnler}>Add New Expense</button>}
      {!isNewExpense && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseHandler}
          onCancelForm={cancelHadnler}
        />
      )}
    </div>
  );
};

export default NewExpense;
