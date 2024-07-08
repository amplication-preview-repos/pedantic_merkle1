import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const StaffEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="role" source="role" />
        <TextInput label="name" source="name" />
        <TextInput label="department" source="department" />
      </SimpleForm>
    </Edit>
  );
};
