import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { AddIngredientDto } from 'src/dto/addIngredientDto';
import { IngredientEntity } from './entity/ingredient.entity';
import { IngredientsService } from './ingredients.service';

@Controller('ingredients')
export class IngredientsController {


    constructor(
        private ingredientsService: IngredientsService
    ){}

/*
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles("EDITOR")*/
    @Get()
    getListIngredients(){

        return this.ingredientsService.getListIngredients();
    }

    @Get('/:id')
    getIngredientById(
        @Param('id', ParseIntPipe)id
    ){
        return this.ingredientsService.getIngredientById(id);
    }

    @Post()
    addCategory(@Body() ingredient: AddIngredientDto){
        
        return this.ingredientsService.addNewIngredient(ingredient);
    }

   // @UseGuards(JwtAuthGuard)
    @Patch('/:id')
    updateIngredient(
        @Param('id', ParseIntPipe)id,
        @Body()updatedIngredient: Partial<IngredientEntity>
    ){

        return this.ingredientsService.updateIngredient(id, updatedIngredient);
    }

    //@UseGuards(JwtAuthGuard)
    @Delete('/:id')
    deleteIngredient(
        @Param('id', ParseIntPipe)id
    ){
        return this.ingredientsService.deleteIngredient(id);
    }

}
