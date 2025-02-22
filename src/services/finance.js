const Finance = require('../model/finance');


const FinanceService = {
    async getFinance(){
        const finance = await Finance.find({});
        return finance;
    },

    async addService(data){
        const finance = new Finance(data);
        await finance.save()
        return finance;
    },

    async getFinancesByMonth(month){
        const finance = await Finance.find({month:month})
        return finance
    },

    async getFinancesByCategory(category){
        const finance = await Finance.find({category:category})
        return finance;
    },

    async updateFinance(id, data){
        const finance = await Finance.findByIdAndUpdate(id,data)
        return finance;
    },

    async deleteFinance(id){
        const finance = await Finance.findByIdAndDelete(id)
        return finance;
    }
}

module.exports = FinanceService;