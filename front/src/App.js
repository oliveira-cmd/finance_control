import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Transactions from './components/transactions/listTransactions';
import AddTransaction from './components/transactions/addTransactions';
import EditTransaction from './components/transactions/editTransactions';
import DeleteTransaction from './components/transactions/deleteTransactions';
import Categories from './components/categorys/listCategory';
import AddCategory from './components/categorys/addCategory';

const App = () => {
  return (
      <Router>
      <Routes>
        <Route path="/transactions" component={Transactions} />
        <Route path="/add-transaction" component={AddTransaction} />
        <Route path="/edit-transaction/:id" component={EditTransaction} />
        <Route path="/delete-transaction/:id" component={DeleteTransaction} />
        <Route path="/categories" component={Categories} />
        <Route path="/add-category" component={AddCategory} />
      </Routes>
    </Router>
  );
};

export default App;
