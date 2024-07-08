import { AppointmentUpdateManyWithoutPatientsInput } from "./AppointmentUpdateManyWithoutPatientsInput";

export type PatientUpdateInput = {
  medicalRecordNumber?: number | null;
  name?: string | null;
  dateOfBirth?: Date | null;
  appointments?: AppointmentUpdateManyWithoutPatientsInput;
};
