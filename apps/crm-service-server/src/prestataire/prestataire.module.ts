import { Module } from "@nestjs/common";
import { PrestataireModuleBase } from "./base/prestataire.module.base";
import { PrestataireService } from "./prestataire.service";
import { PrestataireController } from "./prestataire.controller";
import { PrestataireResolver } from "./prestataire.resolver";

@Module({
  imports: [PrestataireModuleBase],
  controllers: [PrestataireController],
  providers: [PrestataireService, PrestataireResolver],
  exports: [PrestataireService],
})
export class PrestataireModule {}
