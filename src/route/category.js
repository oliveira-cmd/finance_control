const express = require('express')
const CategoryController = require('../controller/category');
const router = express.Router()

router.post('/', CategoryController.addCategory)
router.get('/', CategoryController.getCategory)


module.exports = router