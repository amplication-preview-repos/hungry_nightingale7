/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { VerificationWhereInput } from "./VerificationWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class VerificationListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => VerificationWhereInput,
  })
  @ValidateNested()
  @Type(() => VerificationWhereInput)
  @IsOptional()
  @Field(() => VerificationWhereInput, {
    nullable: true,
  })
  every?: VerificationWhereInput;

  @ApiProperty({
    required: false,
    type: () => VerificationWhereInput,
  })
  @ValidateNested()
  @Type(() => VerificationWhereInput)
  @IsOptional()
  @Field(() => VerificationWhereInput, {
    nullable: true,
  })
  some?: VerificationWhereInput;

  @ApiProperty({
    required: false,
    type: () => VerificationWhereInput,
  })
  @ValidateNested()
  @Type(() => VerificationWhereInput)
  @IsOptional()
  @Field(() => VerificationWhereInput, {
    nullable: true,
  })
  none?: VerificationWhereInput;
}
export { VerificationListRelationFilter as VerificationListRelationFilter };
