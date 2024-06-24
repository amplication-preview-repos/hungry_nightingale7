import { ContractWhereUniqueInput } from "../contract/ContractWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type VerificationWhereInput = {
  contract?: ContractWhereUniqueInput;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  status?: "Option1";
  verificationDocument?: JsonFilter;
};
