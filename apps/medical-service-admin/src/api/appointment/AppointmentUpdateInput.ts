import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type AppointmentUpdateInput = {
  date?: Date | null;
  notes?: string | null;
  patient?: PatientWhereUniqueInput | null;
};
