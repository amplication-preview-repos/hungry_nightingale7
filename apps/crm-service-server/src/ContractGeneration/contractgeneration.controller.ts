import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ContractGenerationService } from "./contractgeneration.service";
import { GenerateContractInput } from "../contractGeneration/GenerateContractInput";
import { GenerateContractOutput } from "../contractGeneration/GenerateContractOutput";

@swagger.ApiTags("contractGenerations")
@common.Controller("contractGenerations")
export class ContractGenerationController {
  constructor(protected readonly service: ContractGenerationService) {}

  @common.Post("/generate-contract")
  @swagger.ApiOkResponse({
    type: GenerateContractOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GenerateContract(
    @common.Body()
    body: GenerateContractInput
  ): Promise<GenerateContractOutput> {
        return this.service.GenerateContract(body);
      }
}
