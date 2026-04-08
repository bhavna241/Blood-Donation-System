import Donor from "../models/Donor.js";

// ✅ Register donor
export const registerDonor = async (req, res) => {
  try {
    console.log("BODY RECEIVED:", req.body); // 👈 ADD THIS

    const donor = new Donor(req.body);
    await donor.save();

    res.status(201).json({ message: "Donor registered", donor });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get donors
export const getDonors = async (req, res) => {
  try {
    console.log("QUERY RECEIVED:", req.query); // 👈 ADD THIS
    const { bloodGroup, city } = req.query;

    let filter = {};

    if (bloodGroup) {
      filter.bloodGroup = new RegExp(`^${bloodGroup}$`, "i");
    }

    if (city) {
      filter.city = new RegExp(city, "i");
    }

    const donors = await Donor.find(filter);

    res.status(200).json(donors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};