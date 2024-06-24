import { ContractCreateNestedManyWithoutPrestatairesInput } from "./ContractCreateNestedManyWithoutPrestatairesInput";

export type PrestataireCreateInput = {
  contracts?: ContractCreateNestedManyWithoutPrestatairesInput;
  email?: string | null;
  name?: string | null;
  serviceType?: string | null;
};
