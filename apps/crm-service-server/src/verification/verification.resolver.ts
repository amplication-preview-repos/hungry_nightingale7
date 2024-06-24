import * as graphql from "@nestjs/graphql";
import { VerificationResolverBase } from "./base/verification.resolver.base";
import { Verification } from "./base/Verification";
import { VerificationService } from "./verification.service";

@graphql.Resolver(() => Verification)
export class VerificationResolver extends VerificationResolverBase {
  constructor(protected readonly service: VerificationService) {
    super(service);
  }
}
