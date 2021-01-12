
import { RecipeEntity } from "src/recipes/entity/recipe.entity";
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('categories')

export class CategoryEntity{
    
    @PrimaryGeneratedColumn()
    id: number;
    @Column({
        nullable: true
    })
    name: string;
}