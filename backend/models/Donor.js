import mongoose from "mongoose";

const donorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  bloodGroup: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  lastDonationDate: {
    type: Date,
  },
  availability: {
    type: Boolean,
    default: true,
  },
});

const Donor = mongoose.model("Donor", donorSchema);

export default Donor;