import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PrestataireWhereUniqueInput } from "../prestataire/PrestataireWhereUniqueInput";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";
import { VerificationListRelationFilter } from "../verification/VerificationListRelationFilter";

export type ContractWhereInput = {
  client?: ClientWhereUniqueInput;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  prestataire?: PrestataireWhereUniqueInput;
  property?: PropertyWhereUniqueInput;
  startDate?: DateTimeNullableFilter;
  verifications?: VerificationListRelationFilter;
};
