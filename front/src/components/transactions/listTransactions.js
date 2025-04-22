import React, { useEffect, useState } from 'react';
import api from '../../api';

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    api.get('/finance')
      .then(response => {    
        console.log('fjdslkjadsjkdshldk');
            
        setTransactions(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar transações:', error);
      });
  }, []);

  return (
    <div>
      <h1>Transações</h1>
      <ul>
        {transactions.map(transaction => (
          <li key={transaction.id}>{transaction.description} - {transaction.amount}</li>
        ))}
      </ul>
    </div>
  );
};

export default Transactions;
