import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddIngredientDto } from 'src/dto/addIngredientDto';
import { Repository } from 'typeorm';
import { IngredientEntity } from './entity/ingredient.entity';

@Injectable()
export class IngredientsService {
    
    constructor(
        @InjectRepository(IngredientEntity)
        private ingredientEntity: Repository<IngredientEntity>
        ){

    }

    async getListIngredients(): Promise<IngredientEntity[]>{

        return await this.ingredientEntity.find()

    }

    async getIngredientById(id): Promise<IngredientEntity>{
        let ingredientToSendBack = await this.ingredientEntity.findOne(id)

        return ingredientToSendBack;
    }

    async addNewIngredient(ingredient: AddIngredientDto){
        
        return this.ingredientEntity.save(ingredient)

    }

    async updateIngredient(id: number, ingredientpdated: Partial<IngredientEntity>){ 

    let ingredientFound = await this.ingredientEntity.preload({id, ...ingredientpdated})

    if(!ingredientFound){

        throw new NotFoundException(`L'ingrédient d'id ${id} n'existe pas`)

    }
    else{

        return await this.ingredientEntity.save(ingredientFound);

    }
}

    async deleteIngredient(id: number){
        const ingredientToRemove = await this.ingredientEntity.findOne(id);
        if(! ingredientToRemove){
            throw new NotFoundException(`L'ingrédient d'id ${id} n'existe pas`)
        }
        return await this.ingredientEntity.remove(ingredientToRemove);
    }


}

