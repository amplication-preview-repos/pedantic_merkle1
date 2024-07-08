import { AppointmentCreateNestedManyWithoutPatientsInput } from "./AppointmentCreateNestedManyWithoutPatientsInput";

export type PatientCreateInput = {
  medicalRecordNumber?: number | null;
  name?: string | null;
  dateOfBirth?: Date | null;
  appointments?: AppointmentCreateNestedManyWithoutPatientsInput;
};
