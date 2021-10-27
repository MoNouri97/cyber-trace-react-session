import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import History from './components/History';
import AddTransaction from './components/AddTransaction';
import Header from './components/Header';
import { useEffect, useState } from 'react';

// const initial = [
//   { amount: 1000, name: 'salary', id: Math.floor(Math.random() * 100000000) },
//   { amount: -300, name: 'rent', id: Math.floor(Math.random() * 100000000) },
// ];
const initial = () => {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    return JSON.parse(saved);
  }
  return [];
};
const STORAGE_KEY = 'transactions';

const App = () => {
  // init state
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState(initial);

  const addTransaction = newTransaction => {
    setTransactions(curr => [...curr, newTransaction]);
  };
  const deleteTransaction = id => {
    setTransactions(curr => curr.filter(transaction => transaction.id !== id));
  };

  // dependencies , cleanup
  useEffect(() => {
    setBalance(transactions.reduce((acc, curr) => acc + curr.amount, 0));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
  }, [transactions]);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setTransactions(JSON.parse(saved));
    }
  }, []);

  return (
    <>
      <Header />
      <div className='container'>
        <Balance balance={balance} />
        <IncomeExpenses data={transactions} />
        <AddTransaction onAdd={addTransaction} />
        <History data={transactions} onDelete={deleteTransaction} />
      </div>
    </>
  );
};

export default App;
