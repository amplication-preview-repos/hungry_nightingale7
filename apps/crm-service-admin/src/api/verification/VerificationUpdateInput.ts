import { ContractWhereUniqueInput } from "../contract/ContractWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type VerificationUpdateInput = {
  contract?: ContractWhereUniqueInput | null;
  date?: Date | null;
  status?: "Option1" | null;
  verificationDocument?: InputJsonValue;
};
