import { SortOrder } from "../../util/SortOrder";

export type ContractOrderByInput = {
  clientId?: SortOrder;
  createdAt?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  prestataireId?: SortOrder;
  propertyId?: SortOrder;
  startDate?: SortOrder;
  updatedAt?: SortOrder;
};
