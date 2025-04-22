import React from 'react';
import api from '../../api';


const DeleteTransaction = ({ id }) => {
  const handleDelete = () => {
    api.delete(`/transactions/${id}`)
      .then(response => {
        console.log('Transação deletada:', response.data);
      })
      .catch(error => {
        console.error('Erro ao deletar transação:', error);
      });
  };

  return (
    <button onClick={handleDelete}>Deletar Transação</button>
  );
};

export default DeleteTransaction;
