const Category = require('../model/category');

const CategoryService = {
    async getCategory(){
        const category = await Category.find({});
        return category;
    },

    async addCategory(data){
        const category = new Category(data);
        await category.save()
        return category;
    },

    async verifyCategoryExist(name){
        const category = Category.findOne({name:name})
        return category;
    }
}

module.exports = CategoryService;