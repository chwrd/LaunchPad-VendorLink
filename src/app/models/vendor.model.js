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
  category: [{ type: String, enum: ["food", "entertainment", "training", "printing", "photo/video", "decor", "AV/lighting"] }],
  //Business specialy (cuisine, entertainment type, etc.)
  specialty: { type: String },
  //Business fulfillment method (delivery, pickup, etc.)
  fulfillmentMethod: [{ type: String, enum: ["delivery", "pickup"] }],
  //Business tags (e.g. vegan, gluten-free, etc.)
  tags: [{ type: String }],
  phone: { type: String },
  email: { type: String, required: true },
  website: { type: String },
  socialMediaLinks: [{ type: String }],
  priceRange: { type: String },
  fees: { type: String },
  //vendor status on the platform
  status: { type: String, default: 'active' },
  approved: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  //admin information for the vendor
  admin: { type: String },
  //Additional information about the vendor
  description: { type: String },

  rating: { type: Number, min: 0, max: 5 },
  documents: [{ type: String }],
  notes: { type: String },
  image: { type: String },
});

module.exports = mongoose.models.Vendor || mongoose.model('Vendor', vendorSchema);
