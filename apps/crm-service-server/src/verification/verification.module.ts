import { Module } from "@nestjs/common";
import { VerificationModuleBase } from "./base/verification.module.base";
import { VerificationService } from "./verification.service";
import { VerificationController } from "./verification.controller";
import { VerificationResolver } from "./verification.resolver";

@Module({
  imports: [VerificationModuleBase],
  controllers: [VerificationController],
  providers: [VerificationService, VerificationResolver],
  exports: [VerificationService],
})
export class VerificationModule {}
