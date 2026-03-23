export interface Donor {
  id: string;
  name: string;
  age: number;
  bloodGroup: string;
  city: string;
  phone: string;
  lastDonation: string;
  available: boolean;
}

export interface BloodRequest {
  id: string;
  patientName: string;
  bloodGroup: string;
  city: string;
  hospital: string;
  contact: string;
  status: "pending" | "completed";
  createdAt: string;
}
