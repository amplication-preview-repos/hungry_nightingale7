import { ContractCreateNestedManyWithoutClientsInput } from "./ContractCreateNestedManyWithoutClientsInput";

export type ClientCreateInput = {
  contracts?: ContractCreateNestedManyWithoutClientsInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phoneNumber?: string | null;
};
