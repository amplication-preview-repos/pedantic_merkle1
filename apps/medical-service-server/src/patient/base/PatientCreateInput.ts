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
import {
  IsInt,
  Min,
  Max,
  IsOptional,
  IsString,
  MaxLength,
  IsDate,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { AppointmentCreateNestedManyWithoutPatientsInput } from "./AppointmentCreateNestedManyWithoutPatientsInput";

@InputType()
class PatientCreateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  medicalRecordNumber?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  dateOfBirth?: Date | null;

  @ApiProperty({
    required: false,
    type: () => AppointmentCreateNestedManyWithoutPatientsInput,
  })
  @ValidateNested()
  @Type(() => AppointmentCreateNestedManyWithoutPatientsInput)
  @IsOptional()
  @Field(() => AppointmentCreateNestedManyWithoutPatientsInput, {
    nullable: true,
  })
  appointments?: AppointmentCreateNestedManyWithoutPatientsInput;
}

export { PatientCreateInput as PatientCreateInput };
