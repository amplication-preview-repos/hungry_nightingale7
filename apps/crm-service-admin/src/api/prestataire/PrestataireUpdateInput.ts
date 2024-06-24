import { ContractUpdateManyWithoutPrestatairesInput } from "./ContractUpdateManyWithoutPrestatairesInput";

export type PrestataireUpdateInput = {
  contracts?: ContractUpdateManyWithoutPrestatairesInput;
  email?: string | null;
  name?: string | null;
  serviceType?: string | null;
};
