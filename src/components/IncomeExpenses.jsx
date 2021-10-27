import React from 'react';
import { formatMoney } from '../helpers/formatMoney';

const isIncome = transaction => transaction.amount > 0;
const isExpense = transaction => transaction.amount < 0;

const total = (acc, curr) => {
  return acc + curr.amount;
};

const IncomeExpenses = ({ data = [] }) => {
  const income = data.filter(isIncome).reduce(total, 0);
  const expense = data.filter(isExpense).reduce(total, 0);

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
