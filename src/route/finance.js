const express = require('express')
const FinanceController = require('../controller/finance');
const router = express.Router()

router.post('/', FinanceController.addFinance)
router.get('/', FinanceController.getFinances)
router.get('/:month', FinanceController.getFinanceByMonth)
router.get('/cat/:category', FinanceController.getFinanceByCategory)
router.put('/:id', FinanceController.updateFinance)
router.delete('/:id', FinanceController.deleteFinance)


module.exports = router