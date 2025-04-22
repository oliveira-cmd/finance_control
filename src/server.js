const express = require('express');
const app = express();
const FinanceRoute = require('./route/finance');
const CategoryRoute = require('./route/category');
const {runDatabase} = require('./utils/database');
const cors = require('cors')
require("dotenv").config();

app.listen(5555);
app.use(cors())
app.use(express.json());
app.use('/finance', FinanceRoute)
app.use('/category', CategoryRoute)
runDatabase()