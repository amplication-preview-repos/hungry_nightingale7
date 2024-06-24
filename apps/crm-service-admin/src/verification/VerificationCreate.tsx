import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { ContractTitle } from "../contract/ContractTitle";

export const VerificationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="contract.id"
          reference="Contract"
          label="Contract"
        >
          <SelectInput optionText={ContractTitle} />
        </ReferenceInput>
        <DateTimeInput label="date" source="date" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <div />
      </SimpleForm>
    </Create>
  );
};
