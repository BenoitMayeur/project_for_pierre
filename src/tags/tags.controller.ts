import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { AddTagDto } from 'src/dto/addTagDto';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { TagEntity } from './entity/tags.entity';
import { TagsService } from './tags.service';

@Controller('tags')
export class TagsController {

    constructor(
        private tagsService: TagsService
    ){}

/*
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles("EDITOR")*/
    @Get()
    getListTags(){

        return this.tagsService.getListTags();
    }

    @Get('/:id')
    getTagById(
        @Param('id', ParseIntPipe)id
    ){
        return this.tagsService.getTagById(id);
    }

    @Post()
    addTag(@Body() tag: AddTagDto){
        
        return this.tagsService.addNewTag(tag);
    }

   // @UseGuards(JwtAuthGuard)
    @Patch('/:id')
    updateTag(
        @Param('id', ParseIntPipe)id,
        @Body()updatedTag: Partial<TagEntity>
    ){

        return this.tagsService.updateTag(id, updatedTag);
    }

    //@UseGuards(JwtAuthGuard)
    @Delete('/:id')
    deleteTag(
        @Param('id', ParseIntPipe)id
    ){
        return this.tagsService.deleteTag(id);
    }

}
