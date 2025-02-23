const CategoryService = require('../services/category')

const CategoryController = {
    async getCategory(req, res){
        try {
            const category = await CategoryService.getCategory();
            res.status(200).json(category)
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    },

    async addCategory(req, res){
        try {
            const {name} = req.body;
            const verifyNameExist = await CategoryService.verifyCategoryExist(name)
            if(!verifyNameExist){
                const category = await CategoryService.addCategory({name});
                res.status(200).json(category)
            } else {
                res.status(200).json({message: 'Ja existe uma categoria cadastrada com este nome', success: false})
            }
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }
}

module.exports = CategoryController;