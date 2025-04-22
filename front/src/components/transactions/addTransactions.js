import React, { useState } from 'react';
import api from '../../api';


const AddTransaction = () => {
  const [month, setMonth] = useState('');
  const [category, setCategory] = useState('');
  const [value, setvalue] = useState('');
  const [movement, setMovement] = useState('');
  const [installments, setInstallments] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post('/finance', { month, category, value, movement, installments, description })
      .then(response => {
        console.log('Transação adicionada:', response.data);
      })
      .catch(error => {
        console.error('Erro ao adicionar transação:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Mes:</label>
        <input type="text" value={month} onChange={(e) => setMonth(e.target.value)} />
      </div>
      <div>
        <label>Categoria:</label>
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
      </div>
      <div>
        <label>Valor:</label>
        <input type="number" value={value} onChange={(e) => setvalue(e.target.value)} />
      </div>
      <div>
        <label>Movimento:</label>
        <input type="text" value={movement} onChange={(e) => setMovement(e.target.value)} />
      </div>
      <div>
        <label>Parcelas:</label>
        <input type="text" value={installments} onChange={(e) => setInstallments(e.target.value)} />
      </div>
      <div>
        <label>Descrição:</label>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <button type="submit">Adicionar Transação</button>
    </form>
  );
};

export default AddTransaction;
