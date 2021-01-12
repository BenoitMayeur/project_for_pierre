
import { RecipeEntity } from "src/recipes/entity/recipe.entity";
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('tags')

export class TagEntity{
    
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;

    @ManyToMany(
        type => RecipeEntity,
        recipe=> recipe.tags
        )

    recipe : RecipeEntity[] ;

}