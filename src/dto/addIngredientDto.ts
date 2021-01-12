import { IsString, IsInt, IsNotEmpty, IsOptional, MinLength, MaxLength, IsEmail, IsDate, IsArray, IsBoolean } from 'class-validator';

export class AddIngredientDto{

    @IsNotEmpty()
    @MinLength(1)
    @MaxLength(100)
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsBoolean()
    validated: boolean;

    @IsOptional()
    @IsInt()
    calories: number;
    
    @IsOptional()
    @IsInt()
    carbohydrate: number;
    
    @IsOptional()
    @IsInt()
    lipid: number;
    
    @IsOptional()
    @IsInt()
    protein: number;


}