const mongoose = require('mongoose');

const FinanceSchema = new mongoose.Schema({
    month: {type: String, required:true},
    category: {type: String, required:true},
    value: {type: Number, required: true},
    description: {type:String, required:true}
}, {timestamps:true});

module.exports = mongoose.model('Finance', FinanceSchema);