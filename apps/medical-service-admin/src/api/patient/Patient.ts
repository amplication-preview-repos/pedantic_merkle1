import { Appointment } from "../appointment/Appointment";

export type Patient = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  medicalRecordNumber: number | null;
  name: string | null;
  dateOfBirth: Date | null;
  appointments?: Array<Appointment>;
};
