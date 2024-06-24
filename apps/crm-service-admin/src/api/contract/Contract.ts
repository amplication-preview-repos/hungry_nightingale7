import { Client } from "../client/Client";
import { Prestataire } from "../prestataire/Prestataire";
import { Property } from "../property/Property";
import { Verification } from "../verification/Verification";

export type Contract = {
  client?: Client | null;
  createdAt: Date;
  endDate: Date | null;
  id: string;
  prestataire?: Prestataire | null;
  property?: Property | null;
  startDate: Date | null;
  updatedAt: Date;
  verifications?: Array<Verification>;
};
