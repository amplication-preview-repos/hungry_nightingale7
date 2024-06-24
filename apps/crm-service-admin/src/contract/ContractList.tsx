import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CLIENT_TITLE_FIELD } from "../client/ClientTitle";
import { PRESTATAIRE_TITLE_FIELD } from "../prestataire/PrestataireTitle";
import { PROPERTY_TITLE_FIELD } from "../property/PropertyTitle";

export const ContractList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Contracts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
