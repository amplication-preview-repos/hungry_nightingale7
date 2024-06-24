import { Contract } from "../contract/Contract";

export type Prestataire = {
  contracts?: Array<Contract>;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  serviceType: string | null;
  updatedAt: Date;
};
