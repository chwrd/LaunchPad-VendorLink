const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    unit: { type: String },
    description: { type: String },
    type: { type: String },
    category: { type: String },
    image: { type: String }
}, {
    timestamps: true // This will add createdAt and updatedAt fields automatically
});

module.exports = itemSchema;
