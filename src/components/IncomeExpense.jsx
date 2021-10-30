import React from 'react';
import formatMoney from '../helpers/formatMoney';

const isIncome = transaction => {
  return transaction.amount > 0;
};

const IncomeExpenses = ({ data = [] }) => {
  const income = data.filter(isIncome).reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);
  const expense = data
    .filter(tr => !isIncome(tr))
    .reduce((acc, curr) => {
      return acc + curr.amount;
    }, 0);

  return (
    <div className='inc-exp-container'>
      <div>
        <h4>Income</h4>
        <p className='money plus'>{formatMoney(income)}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className='money minus'>{formatMoney(expense)}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
