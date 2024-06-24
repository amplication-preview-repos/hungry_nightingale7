import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PrestataireService } from "./prestataire.service";
import { PrestataireControllerBase } from "./base/prestataire.controller.base";

@swagger.ApiTags("prestataires")
@common.Controller("prestataires")
export class PrestataireController extends PrestataireControllerBase {
  constructor(protected readonly service: PrestataireService) {
    super(service);
  }
}
