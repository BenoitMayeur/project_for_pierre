import { IsString, IsInt, IsNotEmpty, IsOptional, MinLength, MaxLength, IsEmail, IsDate, IsArray, IsUrl, IsBoolean } from 'class-validator';


export class AddImageDto{

    @IsInt()
    id: number;

    @IsNotEmpty()
    @MinLength(1)
    @MaxLength(50)
    @IsUrl()
    url: string;

    @IsOptional()
    @IsBoolean()
    main_image: boolean;

    @IsNotEmpty()
    id_recipe: number;

}