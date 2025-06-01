const tableBookingSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    numberOfGuests: { type: Number, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    specialRequest: { type: String },
    occasion: { type: String, enum: ['birthday', 'anniversary','Date Night', 'Business','Family Gathering' ,'other'], default: 'other' },
    status: { type: String, enum: ['pending', 'confirmed', 'cancelled'], default: 'pending' }
  }, { timestamps: true });