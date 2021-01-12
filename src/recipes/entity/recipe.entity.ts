
import { CategoryEntity } from "src/categories/entity/category.entity";
import { DifficultiesRecipeEnum } from "src/enums/difficulties.enums";
import { StatusRecipeEnum } from "src/enums/status.enums";
import { FavouriteEntity } from "src/favourites/entity/favourite.entity";
import { ImageEntity } from "src/images/entity/images.entity";
import { MixRecipesIngredientsEntity } from "src/mix_recipes_ingredients/entities/mix_recipes_ingredients.entity";
import { StarEntity } from "src/stars/entity/star.entity";
import { TagEntity } from "src/tags/entity/tags.entity";
import { UserEntity } from "src/users/entity/users.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('recipes')

export class RecipeEntity{
    
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    title: string;
    @Column()
    description: string;
    @Column()
    time_preparation: number;
    @Column()
    time_cooking: number;

    @Column({
        type: 'enum',
        default: DifficultiesRecipeEnum.AVERAGE,
        enum: DifficultiesRecipeEnum
    })
    difficulty: DifficultiesRecipeEnum;

    @Column({
        type: 'enum',
        default: StatusRecipeEnum.SAVED,
        enum: StatusRecipeEnum
    })
    status: StatusRecipeEnum;

    @JoinTable()
    @ManyToMany(
        type => TagEntity,
        tag=> tag.name ,
        {
            cascade: true,
            eager : true 
        })
    
    tags : TagEntity[];

    @OneToOne(
        type => CategoryEntity,
        {
            cascade: true,
            eager : true 
        }
        )
    @JoinColumn()
    category: CategoryEntity;

    @OneToMany(
        type => ImageEntity,
        (image) => image.recipe,{
            cascade: true
        }
    )
    images: ImageEntity[];

    @ManyToOne(
        type => UserEntity,
        (user) => user.recipes,{
            eager: true
        }

    )
    user: UserEntity;

    @OneToMany(
        type => MixRecipesIngredientsEntity,
        (ingredients) => ingredients.recipe,{
            cascade: true
        }
    )
    mix_ingredients: MixRecipesIngredientsEntity[];

    @OneToMany(
        type => FavouriteEntity,
        (favourites) => favourites.recipe,{
            cascade: true
        }
    )
    favourites: FavouriteEntity[];

    @OneToMany(
        type => StarEntity,
        (stars) => stars.recipe,{
            cascade: true
        }
    )
    stars: StarEntity[];


}