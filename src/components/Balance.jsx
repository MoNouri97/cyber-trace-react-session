import React from 'react';
import formatMoney from '../helpers/formatMoney';

// {data} = props

const Balance = ({ data }) => {
  return (
    <>
      <h4>Your Balance</h4>
      <h1>{formatMoney(data)}</h1>
    </>
  );
};

export default Balance;
