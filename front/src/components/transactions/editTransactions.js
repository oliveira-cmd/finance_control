import React, { useState, useEffect } from 'react';
import api from '../../api';


const EditTransaction = ({ match }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  useEffect(() => {
    api.get(`/transactions/${match.params.id}`)
      .then(response => {
        setDescription(response.data.description);
        setAmount(response.data.amount);
      })
      .catch(error => {
        console.error('Erro ao buscar transação:', error);
      });
  }, [match.params.id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    api.put(`/transactions/${match.params.id}`, { description, amount })
      .then(response => {
        console.log('Transação editada:', response.data);
      })
      .catch(error => {
        console.error('Erro ao editar transação:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Descrição:</label>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div>
        <label>Valor:</label>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </div>
      <button type="submit">Editar Transação</button>
    </form>
  );
};

export default EditTransaction;
