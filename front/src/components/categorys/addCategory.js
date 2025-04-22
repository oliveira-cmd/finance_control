import React, { useState } from 'react';
import api from '../../api';


const AddCategory = () => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post('/category', { name })
      .then(response => {
        console.log('Categoria adicionada:', response.data);
      })
      .catch(error => {
        console.error('Erro ao adicionar categoria:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <button type="submit">Adicionar Categoria</button>
    </form>
  );
};

export default AddCategory;
