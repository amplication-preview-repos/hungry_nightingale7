import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ClientTitle } from "../client/ClientTitle";
import { PrestataireTitle } from "../prestataire/PrestataireTitle";
import { PropertyTitle } from "../property/PropertyTitle";
import { VerificationTitle } from "../verification/VerificationTitle";

export const ContractEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="client.id" reference="Client" label="Client">
          <SelectInput optionText={ClientTitle} />
        </ReferenceInput>
        <DateTimeInput label="endDate" source="endDate" />
        <ReferenceInput
          source="prestataire.id"
          reference="Prestataire"
          label="Prestataire"
        >
          <SelectInput optionText={PrestataireTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="property.id"
          reference="Property"
          label="Property"
        >
          <SelectInput optionText={PropertyTitle} />
        </ReferenceInput>
        <DateTimeInput label="startDate" source="startDate" />
        <ReferenceArrayInput
          source="verifications"
          reference="Verification"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={VerificationTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
