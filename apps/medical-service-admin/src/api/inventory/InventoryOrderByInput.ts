import { SortOrder } from "../../util/SortOrder";

export type InventoryOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  expiryDate?: SortOrder;
  name?: SortOrder;
  quantity?: SortOrder;
};
