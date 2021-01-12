
import { FavouriteEntity } from "src/favourites/entity/favourite.entity";
import { RecipeEntity } from "src/recipes/entity/recipe.entity";
import { RoleEntity } from "src/roles/entity/roles.entity";
import { StarEntity } from "src/stars/entity/star.entity";
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')

export class UserEntity{
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    password: string;

    @Column()
    email_address: string;

    @ManyToOne(
        type => RoleEntity,
        (role) => role.users,{
            eager: true
        }

    )
    role: RoleEntity;

    @OneToMany(
        type => RecipeEntity,
        (recipe) => recipe.user,{
            cascade: true
        }
    )
    recipes: RecipeEntity[];

    @OneToMany(
        type => FavouriteEntity,
        (favourites) => favourites.user,{
            cascade: true
        }
    )
    favourites: FavouriteEntity[];

    @OneToMany(
        type => StarEntity,
        (stars) => stars.user,{
            cascade: true
        }
    )
    stars: StarEntity[];


}