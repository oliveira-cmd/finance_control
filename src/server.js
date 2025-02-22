const express = require('express');
const app = express();
const FinanceRoute = require('./route/finance');
const {runDatabase} = require('./utils/database')
require("dotenv").config();

app.listen(3000);
app.use(express.json());
app.use('/finance', FinanceRoute)
runDatabase()