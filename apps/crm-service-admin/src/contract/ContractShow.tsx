import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { CONTRACT_TITLE_FIELD } from "./ContractTitle";
import { CLIENT_TITLE_FIELD } from "../client/ClientTitle";
import { PRESTATAIRE_TITLE_FIELD } from "../prestataire/PrestataireTitle";
import { PROPERTY_TITLE_FIELD } from "../property/PropertyTitle";

export const ContractShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Client" source="client.id" reference="Client">
          <TextField source={CLIENT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="endDate" source="endDate" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Prestataire"
          source="prestataire.id"
          reference="Prestataire"
        >
          <TextField source={PRESTATAIRE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Property"
          source="property.id"
          reference="Property"
        >
          <TextField source={PROPERTY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="startDate" source="startDate" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Verification"
          target="contractId"
          label="Verifications"
        >
          <Datagrid rowClick="show">
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
            <TextField
              label="verificationDocument"
              source="verificationDocument"
            />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
