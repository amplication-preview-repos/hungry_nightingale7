import { Contract } from "../contract/Contract";

export type Client = {
  contracts?: Array<Contract>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  phoneNumber: string | null;
  updatedAt: Date;
};
