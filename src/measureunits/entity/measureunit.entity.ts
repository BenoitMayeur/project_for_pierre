import { MixRecipesIngredientsEntity } from "src/mix_recipes_ingredients/entities/mix_recipes_ingredients.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('measureunits')

export class MesasureUnitsEntity{
    
    @PrimaryGeneratedColumn()
    id: number;
    @Column({})
    name: string;

    @OneToMany(
        type => MixRecipesIngredientsEntity,
        (ingredients) => ingredients.recipe,{
            cascade: true
        }
    )
    ingredients: MixRecipesIngredientsEntity[];

}