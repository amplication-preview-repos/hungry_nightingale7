import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ContractListRelationFilter } from "../contract/ContractListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type PropertyWhereInput = {
  address?: StringNullableFilter;
  contracts?: ContractListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  size?: IntNullableFilter;
};
