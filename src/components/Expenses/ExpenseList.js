import React from 'react';
import ExpenseItems from './ExpenseItems';

export default function ExpenseList(props) {
  if (props.items.length === 0) {
    return <h2>Found No Item</h2>;
  }

  return (
    <div>
      <h2>Found {props.items.length} Item{props.items.length > 1 ? 's' : ''}</h2>
      <ul>
        {props.items.map((expense) => (
          <ExpenseItems
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </ul>
    </div>
  );
}
