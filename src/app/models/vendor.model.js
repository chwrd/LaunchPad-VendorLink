const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({
  vendorId: { type: String, unique: true, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  address: {
    street: { type: String },
    city: { type: String },
    state: { type: String },
    zip: { type: String },
    country: { type: String }
  },
  website: { type: String },
  description: { type: String },
  category: { type: String },
  status: { type: String, default: 'active' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  contactPerson: { type: String },
  productsOrServices: [{ type: String }],
  rating: { type: Number, min: 0, max: 5 },
  documents: [{ type: String }],
  notes: { type: String }
});

module.exports = mongoose.model('Vendor', vendorSchema);
