import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddCategoryDto } from 'src/dto/addCategoryDto';
import { Repository } from 'typeorm';
import { CategoryEntity } from './entity/category.entity';

@Injectable()
export class CategoriesService {

    constructor(
        @InjectRepository(CategoryEntity)
        private categoryEntity: Repository<CategoryEntity>
        ){

    }

    async getListCategories(): Promise<CategoryEntity[]>{

        return await this.categoryEntity.find()

    }

    async getCategoryById(id): Promise<CategoryEntity>{
        let categoryToSendBack = await this.categoryEntity.findOne(id)

        return categoryToSendBack;
    }

    async addNewCategory(recipe: AddCategoryDto){
        
        return this.categoryEntity.save(recipe)

    }

    async updateCategory(id: number, categoryUpdated: Partial<CategoryEntity>){ 

    let categoryFound = await this.categoryEntity.preload({id, ...categoryUpdated})

    if(!categoryFound){

        throw new NotFoundException(`La catégorie d'id ${id} n'existe pas`)

    }
    else{

        return await this.categoryEntity.save(categoryFound);

    }
}

    async deleteCategory(id: number){
        const categoryToRemove = await this.categoryEntity.findOne(id);
        if(! categoryToRemove){
            throw new NotFoundException(`La catégorie d'id ${id} n'existe pas`)
        }
        return await this.categoryEntity.remove(categoryToRemove);
    }


}
