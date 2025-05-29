const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    itemId: { type: String, unique: true, required: true },
    name: { type: String, required: true },
    description: { type: String },
    type: { type: String, enum: ["food", "beverage", "service", "equipment", "package", "other"], required: true },
    pricing: {
        price: { type: Number, required: true },
        comparePrice: { type: Number }, // Original price if item is on sale
        unit: { type: String, required: true }, // e.g., 'each', 'hour', 'day'
        minimumQuantity: { type: Number, default: 1 },
        maximumQuantity: { type: Number },
        bulk: [{ // Bulk pricing options
            quantity: { type: Number },
            price: { type: Number }
        }]
    },
    availability: {
        isAvailable: { type: Boolean, default: true },
        inStock: { type: Boolean, default: true },
        quantity: { type: Number }, // Current stock quantity
        leadTime: { type: Number }, // Hours needed for preparation
        customAvailability: [{ // For special dates/times
            date: { type: Date },
            isAvailable: { type: Boolean },
            quantity: { type: Number }
        }]
    },
    details: {
        sku: { type: String },
        brand: { type: String },
        ingredients: [{ type: String }],
        allergens: [{ type: String }],
        nutritionalInfo: {
            servingSize: { type: String },
            calories: { type: Number },
            protein: { type: Number },
            carbohydrates: { type: Number },
            fat: { type: Number }
        },
        preparation: { type: String }, // Preparation/cooking instructions
        dimensions: {
            length: { type: Number },
            width: { type: Number },
            height: { type: Number },
            weight: { type: Number },
            unit: { type: String } // e.g., 'cm', 'inches', 'kg', 'lbs'
        }
    },
    customization: {
        options: [{
            name: { type: String },
            type: { type: String, enum: ["single", "multiple"] },
            required: { type: Boolean, default: false },
            choices: [{
                name: { type: String },
                price: { type: Number, default: 0 }
            }]
        }],
        notes: { type: Boolean, default: false }, // Whether customer notes are allowed
        maxModifications: { type: Number } // Maximum number of modifications allowed
    },
    media: {
        images: [{
            url: { type: String },
            alt: { type: String },
            isPrimary: { type: Boolean, default: false }
        }],
        video: { type: String }
    },
    metadata: {
        tags: [{ type: String }],
        category: { type: String },
        featured: { type: Boolean, default: false },
        searchKeywords: [{ type: String }],
        popularity: { type: Number, default: 0 } // For sorting/featuring items
    }
}, {
    timestamps: true // This will add createdAt and updatedAt fields automatically
});

// Add indexes for frequently queried fields
itemSchema.index({ "availability.isAvailable": 1 });
itemSchema.index({ "metadata.featured": 1 });
itemSchema.index({ "metadata.popularity": -1 });
itemSchema.index({ type: 1 });

module.exports = itemSchema;
