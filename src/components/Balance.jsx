import React from 'react';
import { formatMoney } from '../helpers/formatMoney';

const Balance = ({ balance }) => {
  // code here
  return (
    <>
      <h4>Your Balance</h4>
      <h1>{formatMoney(balance, 'USD')}</h1>
    </>
  );
};

export default Balance;
