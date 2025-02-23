const express = require('express');
const app = express();
const FinanceRoute = require('./route/finance');
const CategoryRoute = require('./route/category');
const {runDatabase} = require('./utils/database')
require("dotenv").config();

app.listen(3000);
app.use(express.json());
app.use('/finance', FinanceRoute)
app.use('/category', CategoryRoute)
runDatabase()