import { ContractListRelationFilter } from "../contract/ContractListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PrestataireWhereInput = {
  contracts?: ContractListRelationFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  serviceType?: StringNullableFilter;
};
