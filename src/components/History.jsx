import React from 'react';
import { formatMoney } from '../helpers/formatMoney';

const History = ({ data, onDelete }) => {
  return (
    <>
      <h3>History</h3>
      <ul className='list'>
        {data.map(transaction => (
          <li
            key={transaction.id}
            className={transaction.amount < 0 ? 'minus' : 'plus'}
          >
            {transaction.name}
            <span>{formatMoney(transaction.amount)}</span>
            <button
              onClick={() => onDelete(transaction.id)}
              className='delete-btn'
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default History;
