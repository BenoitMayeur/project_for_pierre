import { IsString, IsInt, IsNotEmpty, IsOptional, MinLength, MaxLength, IsEmail, IsDate, IsArray, IsUrl, IsBoolean } from 'class-validator';


export class AddStarDto{

    @IsNotEmpty()
    @IsInt()
    id: number;

    @IsNotEmpty()
    @IsDate()
    @MinLength(1)
    @MaxLength(5)
    marks: number;

    @IsNotEmpty()
    id_user: number;

    @IsNotEmpty()
    id_recipe: number;

}