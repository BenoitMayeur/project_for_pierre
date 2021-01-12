import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { AddCategoryDto } from 'src/dto/addCategoryDto';
import { CategoriesService } from './categories.service';
import { CategoryEntity } from './entity/category.entity';

@Controller('categories')
export class CategoriesController {

    constructor(
        private categoriesService: CategoriesService
    ){}

/*
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles("EDITOR")*/
    @Get()
    getListCategories(){

        return this.categoriesService.getListCategories();
    }

    @Get('/:id')
    getCategoryById(
        @Param('id', ParseIntPipe)id
    ){
        return this.categoriesService.getCategoryById(id);
        
    }

    @Post()
    addCategory(@Body() category: AddCategoryDto){
        
        return this.categoriesService.addNewCategory(category);
    }

   // @UseGuards(JwtAuthGuard)
    @Patch('/:id')
    updateCategory(
        @Param('id', ParseIntPipe)id,
        @Body()updatedCategory: Partial<CategoryEntity>
    ){

        return this.categoriesService.updateCategory(id, updatedCategory);
    }

    //@UseGuards(JwtAuthGuard)
    @Delete('/:id')
    deleteCategory(
        @Param('id', ParseIntPipe)id
    ){
        return this.categoriesService.deleteCategory(id);
    }

}
