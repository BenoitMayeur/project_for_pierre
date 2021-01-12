
import { IngredientEntity } from "src/ingredients/entity/ingredient.entity";
import { MesasureUnitsEntity } from "src/measureunits/entity/measureunit.entity";
import { RecipeEntity } from "src/recipes/entity/recipe.entity";
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('mix_recipes_ingredients_entity')

export class MixRecipesIngredientsEntity{
    
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    quantity: number;

    @ManyToOne(
        type => RecipeEntity,
        (recipe) => recipe.mix_ingredients,
        
    )
    recipe: RecipeEntity;

    @ManyToOne(
        type => MesasureUnitsEntity,
        (measureunit) => measureunit.ingredients,
        
    )
    measureunit: MesasureUnitsEntity;

    @ManyToOne(
        type => IngredientEntity,
        (ingredient) => ingredient.mixRecipeIngredient,{
            eager: true
        }

    )
    ingredient: IngredientEntity;


    

}