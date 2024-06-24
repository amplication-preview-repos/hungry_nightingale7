import * as graphql from "@nestjs/graphql";
import { PrestataireResolverBase } from "./base/prestataire.resolver.base";
import { Prestataire } from "./base/Prestataire";
import { PrestataireService } from "./prestataire.service";

@graphql.Resolver(() => Prestataire)
export class PrestataireResolver extends PrestataireResolverBase {
  constructor(protected readonly service: PrestataireService) {
    super(service);
  }
}
