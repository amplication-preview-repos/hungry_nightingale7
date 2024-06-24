import { Contract } from "../contract/Contract";

export type Property = {
  address: string | null;
  contracts?: Array<Contract>;
  createdAt: Date;
  id: string;
  name: string | null;
  size: number | null;
  updatedAt: Date;
};
