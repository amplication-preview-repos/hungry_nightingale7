import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ObjectType("GenerateContractOutputObject")
class GenerateContractOutput {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    contractId!: string;

    @Field(() => Date)
    @Type(() => Date)
    startDate!: Date;

    @Field(() => Date)
    @Type(() => Date)
    endDate!: Date;
}

export { GenerateContractOutput as GenerateContractOutput };