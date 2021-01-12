import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { AddImageDto } from 'src/dto/addImageDto';
import { ImageEntity } from './entity/images.entity';
import { ImagesService } from './images.service';

@Controller('images')
export class ImagesController {

    constructor(
        private imagesService: ImagesService
    ){}

/*
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles("EDITOR")*/
    @Get()
    getListImages(){

        return this.imagesService.getListImages();
    }

    @Get('/:id')
    getImageById(
        @Param('id', ParseIntPipe)id
    ){
        return this.imagesService.getImageById(id);
    }

    @Post()
    addImage(@Body() image: AddImageDto){
        
        return this.imagesService.addNewImage(image);
    }

   // @UseGuards(JwtAuthGuard)
    @Patch('/:id')
    updateImage(
        @Param('id', ParseIntPipe)id,
        @Body()updatedImage: Partial<ImageEntity>
    ){

        return this.imagesService.updateImage(id, updatedImage);
    }

    //@UseGuards(JwtAuthGuard)
    @Delete('/:id')
    deleteImage(
        @Param('id', ParseIntPipe)id
    ){
        return this.imagesService.deleteImage(id);
    }

}
