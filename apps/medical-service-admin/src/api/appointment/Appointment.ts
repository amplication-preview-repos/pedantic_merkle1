import { Patient } from "../patient/Patient";

export type Appointment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  date: Date | null;
  notes: string | null;
  patient?: Patient | null;
};
