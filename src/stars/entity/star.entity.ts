

import { RolesEnum } from "src/enums/roles.enums";

import { PermissionEntity } from "src/permissions/entity/permission.entity";
import { RecipeEntity } from "src/recipes/entity/recipe.entity";

import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from '../../users/entity/users.entity'

@Entity('stars')

export class StarEntity{
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    marks: number;

    @ManyToOne(
        type => RecipeEntity,
        (recipe) => recipe.stars,{
            eager: true
        }

    )
    recipe: RecipeEntity;

    @ManyToOne(
        type => UserEntity,
        (user) => user.stars,{
            eager: true
        }

    )
    user: UserEntity;

}