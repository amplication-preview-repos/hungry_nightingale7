import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PrestataireServiceBase } from "./base/prestataire.service.base";

@Injectable()
export class PrestataireService extends PrestataireServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
