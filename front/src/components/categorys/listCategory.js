import React, { useEffect, useState } from 'react';
import api from '../../api';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    api.get('/category')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar categorias:', error);
      });
  }, []);

  return (
    <div>
      <h1>Categorias</h1>
      <ul>
        {categories.map(category => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
