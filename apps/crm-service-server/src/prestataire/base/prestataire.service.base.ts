/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Prestataire as PrismaPrestataire,
  Contract as PrismaContract,
} from "@prisma/client";

export class PrestataireServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.PrestataireCountArgs, "select">
  ): Promise<number> {
    return this.prisma.prestataire.count(args);
  }

  async prestataires(
    args: Prisma.PrestataireFindManyArgs
  ): Promise<PrismaPrestataire[]> {
    return this.prisma.prestataire.findMany(args);
  }
  async prestataire(
    args: Prisma.PrestataireFindUniqueArgs
  ): Promise<PrismaPrestataire | null> {
    return this.prisma.prestataire.findUnique(args);
  }
  async createPrestataire(
    args: Prisma.PrestataireCreateArgs
  ): Promise<PrismaPrestataire> {
    return this.prisma.prestataire.create(args);
  }
  async updatePrestataire(
    args: Prisma.PrestataireUpdateArgs
  ): Promise<PrismaPrestataire> {
    return this.prisma.prestataire.update(args);
  }
  async deletePrestataire(
    args: Prisma.PrestataireDeleteArgs
  ): Promise<PrismaPrestataire> {
    return this.prisma.prestataire.delete(args);
  }

  async findContracts(
    parentId: string,
    args: Prisma.ContractFindManyArgs
  ): Promise<PrismaContract[]> {
    return this.prisma.prestataire
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .contracts(args);
  }
}
