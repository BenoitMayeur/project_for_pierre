import { IsString, IsInt, IsNotEmpty, IsOptional, MinLength, MaxLength, IsEmail, IsDate, IsArray, IsUrl, IsBoolean } from 'class-validator';


export class AddFavouriteDto{

    @IsNotEmpty()
    @IsDate()
    date: Date;

    @IsNotEmpty()
    id_user: number;

    @IsNotEmpty()
    id_recipe: number;

}