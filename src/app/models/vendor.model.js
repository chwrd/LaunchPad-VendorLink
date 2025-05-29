const mongoose = require('mongoose');
const Menu = require('./menu.model');

const vendorSchema = new mongoose.Schema({
  vendorId: { type: String, unique: true, required: true },
  name: { type: String, required: true },
  address: {
    street: { type: String },
    city: { type: String },
    state: { type: String },
    zip: { type: String },
    country: { type: String }
  },
  zipCode: { type: String },
  hours: { type: String },
  menu: [Menu.schema], // Array of Menu subdocuments
  serviceType: [{ type: String, enum: ["food", "entertainment", "training", "printing", "photo/video", "decor", "AV/lighting"] }],
  fulfillmentMethod: [{ type: String, enum: ["delivery", "pickup"] }],
  tags: [{ type: String }],
  phone: { type: String },
  email: { type: String, required: true },
  website: { type: String },
  socialMediaLinks: [{ type: String }],
  priceRange: { type: String },
  fees: { type: String },
  active: { type: Boolean, default: true },
  approved: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  admin: { type: String },
  description: { type: String },
  category: { type: String },
  status: { type: String, default: 'active' },
  rating: { type: Number, min: 0, max: 5 },
  documents: [{ type: String }],
  notes: { type: String }
});

module.exports = mongoose.models.Vendor || mongoose.model('Vendor', vendorSchema);
