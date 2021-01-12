import { IsString, IsInt, IsNotEmpty, IsOptional, MinLength, MaxLength, IsEmail, IsDate, IsArray } from 'class-validator';


export class AddMeasureUnitDto{

    @IsNotEmpty()
    @MinLength(1)
    @MaxLength(50)
    @IsString()
    name: string;

}