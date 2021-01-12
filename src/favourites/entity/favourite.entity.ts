import { RecipeEntity } from "src/recipes/entity/recipe.entity";
import { UserEntity } from "src/users/entity/users.entity";
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('favourites')

export class FavouriteEntity{
    
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    date: Date;

    @ManyToOne(
        type => RecipeEntity,
        (recipe) => recipe.favourites,{
            eager: true
        }

    )
    recipe: RecipeEntity;

    @ManyToOne(
        type => UserEntity,
        (user) => user.favourites,{
            eager: true
        }

    )
    user: UserEntity;

}