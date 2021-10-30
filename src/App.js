import React, { useState } from 'react';
import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import Header from './components/Header';
import IncomeExpenses from './components/IncomeExpense';

const App = () => {
  const [balance, setBalance] = useState(10000);
  const [transactions, setTransactions] = useState([
    { amount: 1000, name: 'salary', id: 1 },
    { amount: -300, name: 'rent', id: 2 },
  ]);
  const addTransaction = newTransaction => {
    setTransactions(oldValue => {
      return [...oldValue, newTransaction];
    });
  };
  return (
    <>
      <Header />
      <div className='container'>
        <Balance data={balance} />
        <IncomeExpenses data={transactions} />
        <AddTransaction onAdd={addTransaction} />
      </div>
    </>
  );
  // return (
  //   <>
  //     <Header />
  //     <div className='container'>
  //       <Balance balance={balance} />
  //       <IncomeExpenses data={transactions} />
  //       <AddTransaction onAdd={addTransaction} />
  //       <History data={transactions} onDelete={deleteTransaction} />
  //     </div>
  //   </>
  // );
};

export default App;
