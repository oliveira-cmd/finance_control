const express = require('express');
const app = express();
const FinanceRoute = require('./route/finance')
app.listen(3000);

app.use('/finance', FinanceRoute)