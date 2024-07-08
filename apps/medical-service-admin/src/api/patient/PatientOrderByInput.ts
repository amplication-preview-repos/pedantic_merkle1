import { SortOrder } from "../../util/SortOrder";

export type PatientOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  medicalRecordNumber?: SortOrder;
  name?: SortOrder;
  dateOfBirth?: SortOrder;
};
