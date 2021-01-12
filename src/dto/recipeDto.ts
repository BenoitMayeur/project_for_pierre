import { IsString, IsInt, IsNotEmpty, IsOptional, MinLength, MaxLength, IsEmail, IsDate, IsArray } from 'class-validator';
import { CategoryEntity } from 'src/categories/entity/category.entity';
import { DifficultiesRecipeEnum } from 'src/enums/difficulties.enums';
import { StatusRecipeEnum } from 'src/enums/status.enums';
import { TagEntity } from 'src/tags/entity/tags.entity';


export class AddRecipeDto{

    @IsInt()
    id: number;

    @IsNotEmpty()
    @MinLength(1)
    @MaxLength(100)
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsInt()
    time_preparation: number;

    @IsOptional()
    @IsInt()
    time_cooking: number;

    @IsOptional()
    difficulty: DifficultiesRecipeEnum;

    @IsOptional()
    status: StatusRecipeEnum;

    @IsOptional()
    tags: Partial<TagEntity[]>;

    @IsNotEmpty()
    category: Partial<CategoryEntity>;

}