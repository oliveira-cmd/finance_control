const express = require('express')
const router = express.Router()

router.get('/finance', FinanceController.getFinances)

module.exports = router