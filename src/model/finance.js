const mongoose = require('mongoose');

const FinanceSchema = new mongoose.Schema({
    month: {type: String, required:true},
    category: {type: String, required:true},
    value: {type: Number, required: true},
    movement: {type: Number, required: true, enum: [1,2]},
    installments: {type: Number, required: true, default: 1},
    description: {type:String, required:true}
}, {timestamps:true});

module.exports = mongoose.model('Finance', FinanceSchema);