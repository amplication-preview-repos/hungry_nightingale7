/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { VerificationWhereUniqueInput } from "./VerificationWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { VerificationUpdateInput } from "./VerificationUpdateInput";

@ArgsType()
class UpdateVerificationArgs {
  @ApiProperty({
    required: true,
    type: () => VerificationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => VerificationWhereUniqueInput)
  @Field(() => VerificationWhereUniqueInput, { nullable: false })
  where!: VerificationWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => VerificationUpdateInput,
  })
  @ValidateNested()
  @Type(() => VerificationUpdateInput)
  @Field(() => VerificationUpdateInput, { nullable: false })
  data!: VerificationUpdateInput;
}

export { UpdateVerificationArgs as UpdateVerificationArgs };
