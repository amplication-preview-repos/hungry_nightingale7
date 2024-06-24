import { ContractUpdateManyWithoutPropertiesInput } from "./ContractUpdateManyWithoutPropertiesInput";

export type PropertyUpdateInput = {
  address?: string | null;
  contracts?: ContractUpdateManyWithoutPropertiesInput;
  name?: string | null;
  size?: number | null;
};
