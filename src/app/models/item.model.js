const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    itemId: { type: String, unique: true, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    unit: { type: String, required: true },
    description: { type: String },
    image: { type: String } // New field for image link

});

module.exports = mongoose.models.Item || mongoose.model('Item', itemSchema);
