import { ContractCreateNestedManyWithoutPropertiesInput } from "./ContractCreateNestedManyWithoutPropertiesInput";

export type PropertyCreateInput = {
  address?: string | null;
  contracts?: ContractCreateNestedManyWithoutPropertiesInput;
  name?: string | null;
  size?: number | null;
};
