
import { RecipeEntity } from "src/recipes/entity/recipe.entity";
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('images')

export class ImageEntity{
    
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    url: string;
    @Column({
        default: false
    })
    main_image: boolean;
    @ManyToOne(
        type => RecipeEntity,
        (recipe) => recipe.images,
        
    )
    recipe: Partial<RecipeEntity>;



}