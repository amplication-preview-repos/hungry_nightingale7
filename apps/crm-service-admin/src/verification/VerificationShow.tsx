import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { CONTRACT_TITLE_FIELD } from "../contract/ContractTitle";

export const VerificationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="Contract"
          source="contract.id"
          reference="Contract"
        >
          <TextField source={CONTRACT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="date" source="date" />
        <TextField label="ID" source="id" />
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="verificationDocument" source="verificationDocument" />
      </SimpleShowLayout>
    </Show>
  );
};
