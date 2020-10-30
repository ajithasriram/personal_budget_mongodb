const mongoose = require("mongoose")
const validate = require("mongoose-validator")

var colorValidator = [
    validate({
        validator: 'matches',
        arguments: ['^#([A-Fa-f0-9]{6})$'],
        message: 'Color should be HexColor of length > 6'
    })
]

const personalBudgetSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    budgetValue: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true,
        minlength: 6,
        validate: colorValidator
    }
}, {collection: 'chart_data'})

module.exports = mongoose.model('chart_data', personalBudgetSchema)