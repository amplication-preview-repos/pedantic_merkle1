import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type AppointmentCreateInput = {
  date?: Date | null;
  notes?: string | null;
  patient?: PatientWhereUniqueInput | null;
};
