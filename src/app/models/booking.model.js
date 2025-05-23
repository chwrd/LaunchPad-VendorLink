import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema(
  {
    vendorId: { type: mongoose.Schema.Types.ObjectId, ref: "Vendor", required: true },
    eventName: { type: String, required: true },
    eventType: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    attendees: { type: Number, required: true },
    requirements: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.Booking || mongoose.model("Booking", BookingSchema);
