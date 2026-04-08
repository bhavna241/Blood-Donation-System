import express from "express";
import { registerDonor, getDonors } from "../controllers/donorController.js";

const router = express.Router();

// POST → register donor
router.post("/", registerDonor);

// GET → fetch donors
router.get("/", getDonors);

export default router;