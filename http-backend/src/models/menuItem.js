const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  category: { type: String }, // e.g., Starter, Main Course, Drinks
  imageUrl: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('MenuItem', menuItemSchema);