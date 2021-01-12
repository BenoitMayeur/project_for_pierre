import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddRecipeDto } from 'src/dto/addRecipeDto';
import { Repository } from 'typeorm';
import { RecipeEntity } from './entity/recipe.entity';

@Injectable()
export class RecipesService {


    constructor(
        @InjectRepository(RecipeEntity)
        private recipeEntity: Repository<RecipeEntity>
        ){

    }

    async getListRecipes(): Promise<RecipeEntity[]>{

        return await this.recipeEntity.find()

    }

    async getRecipesById(id): Promise<RecipeEntity>{
        let recipeToSendBack = await this.recipeEntity.findOne(id)

        return recipeToSendBack;
    }

    async addNewRecipe(recipe: AddRecipeDto){
        
        return this.recipeEntity.save(recipe)

    }

    async updateRecipe(id: number, recipeUpdated: Partial<RecipeEntity>){ 

    let recipeFound = await this.recipeEntity.preload({id, ...recipeUpdated})

    if(!recipeFound){

        throw new NotFoundException(`La recette d'id ${id} n'existe pas`)

    }
    else{

        return await this.recipeEntity.save(recipeFound);

    }
}

    async deleteRecipe(id: number){
        const recipeToRemove = await this.recipeEntity.findOne(id);
        if(! recipeToRemove){
            throw new NotFoundException(`Le recette d'id ${id} n'existe pas`)
        }
        return await this.recipeEntity.remove(recipeToRemove);
    }


}
