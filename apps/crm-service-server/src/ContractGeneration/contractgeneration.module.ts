import { Module } from "@nestjs/common";
import { ContractGenerationService } from "./contractgeneration.service";
import { ContractGenerationController } from "./contractgeneration.controller";
import { ContractGenerationResolver } from "./contractgeneration.resolver";

@Module({
  controllers: [ContractGenerationController],
  providers: [ContractGenerationService, ContractGenerationResolver],
  exports: [ContractGenerationService],
})
export class ContractGenerationModule {}
