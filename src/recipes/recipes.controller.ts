import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { AddRecipeDto } from 'src/dto/addRecipeDto';
import { RecipeEntity } from './entity/recipe.entity';
import { RecipesService } from './recipes.service';

@Controller('recipes')
export class RecipesController {
    constructor(
        private recipesService: RecipesService
    ){}

/*
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles("EDITOR")*/
    @Get()
    getListRecipes(){

        return this.recipesService.getListRecipes();
    }

    @Get('/:id')
    getRecipeById(
        @Param('id', ParseIntPipe)id
    ){
        return this.recipesService.getRecipesById(id);
    }

    @Post()
    addRecipe(@Body() recipe: AddRecipeDto){
        
        return this.recipesService.addNewRecipe(recipe);
    }

   // @UseGuards(JwtAuthGuard)
    @Patch('/:id')
    updateRecipe(
        @Param('id', ParseIntPipe)id,
        @Body()updatedRecipe: Partial<RecipeEntity>
    ){

        return this.recipesService.updateRecipe(id, updatedRecipe);
    }

    //@UseGuards(JwtAuthGuard)
    @Delete('/:id')
    deleteRecipe(
        @Param('id', ParseIntPipe)id
    ){
        return this.recipesService.deleteRecipe(id);
    }

}
