import { Transform } from 'class-transformer';
import { IsString, IsInt, IsNotEmpty, IsOptional, MinLength, MaxLength, IsEmail, IsDate, IsArray } from 'class-validator';
import { CategoryEntity } from 'src/categories/entity/category.entity';
import { DifficultiesRecipeEnum } from 'src/enums/difficulties.enums';
import { StatusRecipeEnum } from 'src/enums/status.enums';
import { RoleEntity } from 'src/roles/entity/roles.entity';
import { TagEntity } from 'src/tags/entity/tags.entity';


export class AddUserDto{

    @IsNotEmpty()
    @MinLength(1)
    @MaxLength(100)
    @IsString()
    name: string;

    @IsNotEmpty()
    @MinLength(1)
    @MaxLength(100)
    @IsString()
    password: string;

    @IsNotEmpty()
    @MinLength(1)
    @MaxLength(100)
    @IsEmail()
    email_address: string;

    @IsOptional()
    role: Partial<RoleEntity>;




/*
    @IsOptional()
    @Transform(favoriteIds=> favoriteIds.map(id =>({
        id
    }))
    favorite: FavoriteEntity[];
*/

}