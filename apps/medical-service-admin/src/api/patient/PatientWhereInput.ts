import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";

export type PatientWhereInput = {
  id?: StringFilter;
  medicalRecordNumber?: IntNullableFilter;
  name?: StringNullableFilter;
  dateOfBirth?: DateTimeNullableFilter;
  appointments?: AppointmentListRelationFilter;
};
