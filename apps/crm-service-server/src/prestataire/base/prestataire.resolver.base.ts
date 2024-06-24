/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Prestataire } from "./Prestataire";
import { PrestataireCountArgs } from "./PrestataireCountArgs";
import { PrestataireFindManyArgs } from "./PrestataireFindManyArgs";
import { PrestataireFindUniqueArgs } from "./PrestataireFindUniqueArgs";
import { CreatePrestataireArgs } from "./CreatePrestataireArgs";
import { UpdatePrestataireArgs } from "./UpdatePrestataireArgs";
import { DeletePrestataireArgs } from "./DeletePrestataireArgs";
import { ContractFindManyArgs } from "../../contract/base/ContractFindManyArgs";
import { Contract } from "../../contract/base/Contract";
import { PrestataireService } from "../prestataire.service";
@graphql.Resolver(() => Prestataire)
export class PrestataireResolverBase {
  constructor(protected readonly service: PrestataireService) {}

  async _prestatairesMeta(
    @graphql.Args() args: PrestataireCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Prestataire])
  async prestataires(
    @graphql.Args() args: PrestataireFindManyArgs
  ): Promise<Prestataire[]> {
    return this.service.prestataires(args);
  }

  @graphql.Query(() => Prestataire, { nullable: true })
  async prestataire(
    @graphql.Args() args: PrestataireFindUniqueArgs
  ): Promise<Prestataire | null> {
    const result = await this.service.prestataire(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Prestataire)
  async createPrestataire(
    @graphql.Args() args: CreatePrestataireArgs
  ): Promise<Prestataire> {
    return await this.service.createPrestataire({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Prestataire)
  async updatePrestataire(
    @graphql.Args() args: UpdatePrestataireArgs
  ): Promise<Prestataire | null> {
    try {
      return await this.service.updatePrestataire({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Prestataire)
  async deletePrestataire(
    @graphql.Args() args: DeletePrestataireArgs
  ): Promise<Prestataire | null> {
    try {
      return await this.service.deletePrestataire(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Contract], { name: "contracts" })
  async findContracts(
    @graphql.Parent() parent: Prestataire,
    @graphql.Args() args: ContractFindManyArgs
  ): Promise<Contract[]> {
    const results = await this.service.findContracts(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}