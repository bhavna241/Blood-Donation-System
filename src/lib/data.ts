import { Donor, BloodRequest } from "./types";

export const BLOOD_GROUPS = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"] as const;

export const DUMMY_DONORS: Donor[] = [
  { id: "1", name: "Rahul Sharma", age: 25, bloodGroup: "O+", city: "Delhi", phone: "9876543210", lastDonation: "2024-11-15", available: true },
  { id: "2", name: "Priya Patel", age: 28, bloodGroup: "A+", city: "Mumbai", phone: "9876543211", lastDonation: "2024-10-20", available: true },
  { id: "3", name: "Amit Kumar", age: 32, bloodGroup: "B+", city: "Delhi", phone: "9876543212", lastDonation: "2024-09-10", available: false },
  { id: "4", name: "Sneha Reddy", age: 22, bloodGroup: "AB+", city: "Bangalore", phone: "9876543213", lastDonation: "2024-12-01", available: true },
  { id: "5", name: "Vikram Singh", age: 30, bloodGroup: "O-", city: "Jaipur", phone: "9876543214", lastDonation: "2024-08-25", available: true },
  { id: "6", name: "Ananya Gupta", age: 26, bloodGroup: "A-", city: "Pune", phone: "9876543215", lastDonation: "2024-11-30", available: true },
  { id: "7", name: "Rohan Verma", age: 29, bloodGroup: "B-", city: "Mumbai", phone: "9876543216", lastDonation: "2025-01-05", available: false },
  { id: "8", name: "Kavita Nair", age: 24, bloodGroup: "AB-", city: "Chennai", phone: "9876543217", lastDonation: "2024-07-18", available: true },
];

export const DUMMY_REQUESTS: BloodRequest[] = [
  { id: "1", patientName: "Suresh Mehta", bloodGroup: "O+", city: "Delhi", hospital: "AIIMS Delhi", contact: "9111222333", status: "pending", createdAt: "2025-03-20" },
  { id: "2", patientName: "Lakshmi Iyer", bloodGroup: "A+", city: "Mumbai", hospital: "Lilavati Hospital", contact: "9222333444", status: "completed", createdAt: "2025-03-18" },
  { id: "3", patientName: "Mohammed Ali", bloodGroup: "B+", city: "Bangalore", hospital: "Manipal Hospital", contact: "9333444555", status: "pending", createdAt: "2025-03-22" },
  { id: "4", patientName: "Geeta Rao", bloodGroup: "AB+", city: "Chennai", hospital: "Apollo Hospital", contact: "9444555666", status: "completed", createdAt: "2025-03-15" },
];
