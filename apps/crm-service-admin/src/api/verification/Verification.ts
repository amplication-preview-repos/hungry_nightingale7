import { Contract } from "../contract/Contract";
import { JsonValue } from "type-fest";

export type Verification = {
  contract?: Contract | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  status?: "Option1" | null;
  updatedAt: Date;
  verificationDocument: JsonValue;
};
