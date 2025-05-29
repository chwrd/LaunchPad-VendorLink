const mongoose = require('mongoose');
const Item = require('./item.model');

const menuSchema = new mongoose.Schema({
  menuId: { type: String, unique: true, required: true },
  name: { type: String, required: true },
  deliveryFee: { type: Number, default: 0 },
  additionalFee: { type: Number, default: 0 },
  taxRate: { type: Number, default: 0 },
  available: { type: Boolean, default: true },
  items: [Item.schema], // Array of Item subdocuments
  startTime: { type: String }, // e.g. '08:00'
  endTime: { type: String },   // e.g. '18:00'
  daysAvailable: [{ type: String }], // e.g. ['Monday', 'Tuesday']
  updatedAt: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
  image: { type: String } // New field for image link
});

module.exports = mongoose.models.Menu || mongoose.model('Menu', menuSchema);
