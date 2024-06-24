import * as graphql from "@nestjs/graphql";
import { GenerateContractInput } from "../contractGeneration/GenerateContractInput";
import { GenerateContractOutput } from "../contractGeneration/GenerateContractOutput";
import { ContractGenerationService } from "./contractgeneration.service";

export class ContractGenerationResolver {
  constructor(protected readonly service: ContractGenerationService) {}

  @graphql.Mutation(() => GenerateContractOutput)
  async GenerateContract(
    @graphql.Args()
    args: GenerateContractInput
  ): Promise<GenerateContractOutput> {
    return this.service.GenerateContract(args);
  }
}
