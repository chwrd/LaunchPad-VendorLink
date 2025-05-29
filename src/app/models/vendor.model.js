const mongoose = require('mongoose');
const menuSchema = require('./menu.model');

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
  hours: {
    regular: { type: String }, // e.g. "9:00 AM - 5:00 PM"
    special: { type: String }, // For holiday hours or special occasions
    timezone: { type: String, default: 'UTC' }
  },
  menu: [menuSchema],
  category: [{ 
    type: String, 
    enum: ["food", "entertainment", "training", "printing", "photo/video", "decor", "AV/lighting"] 
  }],
  specialty: { type: String }, // Business specialty (cuisine, entertainment type, etc.)
  fulfillmentMethod: [{ 
    type: String, 
    enum: ["delivery", "pickup", "on-site", "catering"] 
  }],
  tags: [{ type: String }], // Business tags (e.g. vegan, gluten-free, etc.)
  contact: {
    phone: { type: String },
    email: { type: String },
    website: { type: String },
    socialMediaLinks: [{
      platform: { type: String, enum: ["facebook", "instagram", "twitter", "linkedin", "other"] },
      url: { type: String }
    }]
  },
  pricing: {
    priceRange: { type: String, enum: ["$", "$$", "$$$", "$$$$"] },
    minimumOrder: { type: Number },
    fees: {
      delivery: { type: Number, default: 0 },
      service: { type: Number, default: 0 },
      additional: { type: Number, default: 0 }
    },
    taxRate: { type: Number, default: 0 }
  },
  business: {
    status: { type: String, enum: ["active", "inactive", "suspended"], default: "active" },
    approved: { type: Boolean, default: false },
    license: { type: String },
    insurance: {
      provider: { type: String },
      policyNumber: { type: String },
      expiryDate: { type: Date }
    }
  },
  metrics: {
    rating: { type: Number, min: 0, max: 5 },
    totalOrders: { type: Number, default: 0 },
    responseTime: { type: Number }, // Average response time in minutes
    completionRate: { type: Number }, // Percentage of successfully completed orders
  },
  media: {
    logo: { type: String },
    coverImage: { type: String },
    gallery: [{ type: String }]
  },
  documents: [{
    type: { type: String, enum: ["license", "permit", "insurance", "other"] },
    name: { type: String },
    url: { type: String },
    expiryDate: { type: Date }
  }],
  settings: {
    notifications: {
      email: { type: Boolean, default: true },
      sms: { type: Boolean, default: false },
      pushNotifications: { type: Boolean, default: true }
    },
    autoAcceptOrders: { type: Boolean, default: false },
    availabilityBuffer: { type: Number, default: 24 } // Hours of notice needed for bookings
  },
  notes: { type: String },
  admin: { type: String },
  description: { type: String },
}, {
  timestamps: true // This will add createdAt and updatedAt fields automatically
});

// Add indexes for frequently queried fields
vendorSchema.index({ vendorId: 1 });
vendorSchema.index({ "address.zip": 1 });
vendorSchema.index({ category: 1 });
vendorSchema.index({ "business.status": 1 });
vendorSchema.index({ "metrics.rating": -1 });

module.exports = mongoose.models.Vendor || mongoose.model('Vendor', vendorSchema);
