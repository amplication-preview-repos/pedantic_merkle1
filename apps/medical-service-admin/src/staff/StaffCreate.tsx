import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const StaffCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="role" source="role" />
        <TextInput label="name" source="name" />
        <TextInput label="department" source="department" />
      </SimpleForm>
    </Create>
  );
};
