import React, { useEffect, useState } from 'react';
import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import Header from './components/Header';
import History from './components/History';
import IncomeExpenses from './components/IncomeExpense';

const storage_key = 'TRANSACTIONS';

const initial = () => {
  const savedString = localStorage.getItem(storage_key);
  return JSON.parse(savedString);
};

const App = () => {
  const [balance, setBalance] = useState(10000);
  const [transactions, setTransactions] = useState(initial);
  const addTransaction = newTransaction => {
    setTransactions(oldValue => {
      return [...oldValue, newTransaction];
    });
  };

  const deleteTransaction = id => {
    const filtered = transactions.filter(transaction => transaction.id !== id);

    setTransactions(filtered);
  };

  // on every render
  useEffect(() => {
    console.log('hello world !!!');
  });

  useEffect(() => {
    setBalance(
      transactions.reduce((acc, { amount }) => {
        return acc + amount;
      }, 0),
    );

    localStorage.setItem(storage_key, JSON.stringify(transactions));
  }, [transactions]);

  return (
    <>
      <Header />
      <div className='container'>
        <Balance data={balance} />
        <IncomeExpenses data={transactions} />
        <AddTransaction onAdd={addTransaction} />
        <History data={transactions} onDelete={deleteTransaction} />
      </div>
    </>
  );
};

export default App;
