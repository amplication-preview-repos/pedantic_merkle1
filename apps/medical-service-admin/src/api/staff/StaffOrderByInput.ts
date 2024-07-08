import { SortOrder } from "../../util/SortOrder";

export type StaffOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  role?: SortOrder;
  name?: SortOrder;
  department?: SortOrder;
};
