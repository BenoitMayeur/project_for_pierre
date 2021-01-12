import { IsString, IsInt, IsNotEmpty, IsOptional, MinLength, MaxLength, IsEmail, IsDate, IsArray } from 'class-validator';

export class TagDto{

    @IsInt()
    id: number;

    @IsNotEmpty()
    @MinLength(1)
    @MaxLength(100)
    @IsString()
    name: string;

}