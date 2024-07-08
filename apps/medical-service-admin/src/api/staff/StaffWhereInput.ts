import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type StaffWhereInput = {
  id?: StringFilter;
  role?: StringNullableFilter;
  name?: StringNullableFilter;
  department?: StringNullableFilter;
};
