import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { AddStarDto } from 'src/dto/addStarDto';
import { StarEntity } from './entity/star.entity';
import { StarsService } from './stars.service';

@Controller('stars')
export class StarsController {


    
    constructor(
        private starsService: StarsService
    ){}

/*
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles("EDITOR")*/
    @Get()
    getListTags(){

        return this.starsService.getListStars();
    }

    @Get('/:id')
    getStargById(
        @Param('id', ParseIntPipe)id
    ){
        return this.starsService.getStarsById(id);
    }

    @Post()
    addStar(@Body() star: AddStarDto){
        
        return this.starsService.addNewStar(star);
    }

   // @UseGuards(JwtAuthGuard)
    @Patch('/:id')
    updateStar(
        @Param('id', ParseIntPipe)id,
        @Body()updatedStar: Partial<StarEntity>
    ){

        return this.starsService.updateStar(id, updatedStar);
    }


}
