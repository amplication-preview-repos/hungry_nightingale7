import { ContractUpdateManyWithoutClientsInput } from "./ContractUpdateManyWithoutClientsInput";

export type ClientUpdateInput = {
  contracts?: ContractUpdateManyWithoutClientsInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phoneNumber?: string | null;
};
