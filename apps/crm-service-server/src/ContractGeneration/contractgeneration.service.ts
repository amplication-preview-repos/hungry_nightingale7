import { Injectable } from "@nestjs/common";
import { GenerateContractInput } from "../contractGeneration/GenerateContractInput";
import { GenerateContractOutput } from "../contractGeneration/GenerateContractOutput";

@Injectable()
export class ContractGenerationService {
  constructor() {}
  async GenerateContract(args: GenerateContractInput): Promise<GenerateContractOutput> {
    throw new Error("Not implemented");
  }
}
