const mongoose = require('mongoose');
const itemSchema = require('./item.model');

const menuSchema = new mongoose.Schema({
  menuId: { type: String, unique: true, required: true },
  name: { type: String, required: true },
  description: { type: String },
  type: { type: String, enum: ["regular", "special", "seasonal", "catering"], default: "regular" },
  pricing: {
    deliveryFee: { type: Number, default: 0 },
    serviceFee: { type: Number, default: 0 },
    additionalFee: { type: Number, default: 0 },
    taxRate: { type: Number, default: 0 },
    minimumOrder: { type: Number },
    maximumOrder: { type: Number }
  },
  availability: {
    isAvailable: { type: Boolean, default: true },
    startDate: { type: Date }, // For seasonal/special menus
    endDate: { type: Date },   // For seasonal/special menus
    startTime: { type: String }, // e.g. '08:00'
    endTime: { type: String },   // e.g. '18:00'
    daysAvailable: [{
      type: String,
      enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    }],
    customAvailability: [{ // For special dates/times
      date: { type: Date },
      startTime: { type: String },
      endTime: { type: String },
      isAvailable: { type: Boolean }
    }]
  },
  items: [itemSchema],
  categories: [{
    name: { type: String, required: true },
    description: { type: String },
    items: [itemSchema]
  }],
  settings: {
    displayOrder: { type: Number, default: 0 }, // For ordering multiple menus
    isPublic: { type: Boolean, default: true },
    requiresAdvanceNotice: { type: Number }, // Hours of advance notice required
    maxCapacity: { type: Number } // Maximum number of orders per time slot
  },
  media: {
    image: { type: String },
    thumbnail: { type: String }
  }
}, {
  timestamps: true // This will add createdAt and updatedAt fields automatically
});

// Add indexes for frequently queried fields
menuSchema.index({ menuId: 1 });
menuSchema.index({ "availability.isAvailable": 1 });
menuSchema.index({ "availability.startDate": 1, "availability.endDate": 1 });
menuSchema.index({ type: 1 });

module.exports = menuSchema;
