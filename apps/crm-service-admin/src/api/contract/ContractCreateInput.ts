import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { PrestataireWhereUniqueInput } from "../prestataire/PrestataireWhereUniqueInput";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";
import { VerificationCreateNestedManyWithoutContractsInput } from "./VerificationCreateNestedManyWithoutContractsInput";

export type ContractCreateInput = {
  client?: ClientWhereUniqueInput | null;
  endDate?: Date | null;
  prestataire?: PrestataireWhereUniqueInput | null;
  property?: PropertyWhereUniqueInput | null;
  startDate?: Date | null;
  verifications?: VerificationCreateNestedManyWithoutContractsInput;
};
