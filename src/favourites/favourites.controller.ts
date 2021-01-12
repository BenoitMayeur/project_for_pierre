import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { AddFavouriteDto } from 'src/dto/addFavouriteDto';
import { FavouriteEntity } from './entity/favourite.entity';
import { FavouritesService } from './favourites.service';

@Controller('favourites')
export class FavouritesController {

    constructor(
        private favouritesService: FavouritesService
    ){}

/*
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles("EDITOR")*/
    @Get()
    getListFavourites(){

        return this.favouritesService.getListFavourites();
    }

    @Get('/:id')
    getFavouriteById(
        @Param('id', ParseIntPipe)id
    ){
        return this.favouritesService.getFavouriteById(id);
    }

    @Post()
    addFavourite(@Body() favourite: AddFavouriteDto){
        
        return this.favouritesService.addNewFavourite(favourite);
    }

   // @UseGuards(JwtAuthGuard)
    @Patch('/:id')
    updateIngredient(
        @Param('id', ParseIntPipe)id,
        @Body()updatedFavourite: Partial<FavouriteEntity>
    ){

        return this.favouritesService.updateFavourite(id, updatedFavourite);
    }

    //@UseGuards(JwtAuthGuard)
    @Delete('/:id')
    deleteIngredient(
        @Param('id', ParseIntPipe)id
    ){
        return this.favouritesService.deleteFavourite(id);
    }

}
