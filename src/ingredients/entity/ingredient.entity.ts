
import { MixRecipesIngredientsEntity } from "src/mix_recipes_ingredients/entities/mix_recipes_ingredients.entity";
import { RecipeEntity } from "src/recipes/entity/recipe.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('ingredients')

export class IngredientEntity{
    
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    validated: boolean;
    @Column()
    calories: number;
    @Column()
    carbohydrate: number;
    @Column()
    lipid: number;
    @Column()
    protein: number;

    @OneToMany(
        type => MixRecipesIngredientsEntity,
        (mixRecipeIngredient) => mixRecipeIngredient.ingredient,{
            cascade: true
        }
    )
    mixRecipeIngredient: MixRecipesIngredientsEntity[];

}