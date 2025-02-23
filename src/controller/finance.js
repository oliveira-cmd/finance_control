const FinanceService = require('../services/finance')

const FinanceController = {
    async getFinances(req, res){
        try {
            const finance = await FinanceService.getFinance();
            res.status(200).json(finance)
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    },

    async addFinance(req, res){
        try {
            const {month, category, value, movement , installments , description} = req.body;
            const finance = await FinanceService.addService({month, category, value, movement , installments , description});
            res.status(200).json(finance)
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    },

    async getFinanceByMonth(req, res){
        try {
            const month = req.params.month[0].toUpperCase() + req.params.month.substring(1)
            const finance = await FinanceService.getFinancesByMonth(month)
            res.status(200).json(finance)
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    },

    async getFinanceByCategory(req, res){
        try {
            const category = req.params.category[0].toUpperCase() + req.params.category.substring(1)
            const finance = await FinanceService.getFinancesByCategory(category)
            res.status(200).json(finance)
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    },

    async updateFinance(req, res){
        try {
            const id = req.params.id;
            const {month, category, value, movement , installments , description} = req.body
            const finance = await FinanceService.updateFinance(id, {month, category, value, movement , installments , description})
            res.status(200).json(finance)
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    },

    async deleteFinance(req, res){
        try {
            const id = req.params.id;
            const finance = await FinanceService.deleteFinance(id);
            res.status(200).json(finance)   
        } catch (error) {
            res.status(500).json({message: error.message})
            
        }
    }
}

module.exports = FinanceController;