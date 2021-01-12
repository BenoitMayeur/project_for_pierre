import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddTagDto } from 'src/dto/addTagDto';
import { Repository } from 'typeorm';
import { TagEntity } from './entity/tags.entity';

@Injectable()
export class TagsService {

    constructor(
        @InjectRepository(TagEntity)
        private tagEntity: Repository<TagEntity>
        ){

    }

    async getListTags(): Promise<TagEntity[]>{

        return await this.tagEntity.find()

    }

    async getTagById(id): Promise<TagEntity>{
        let tagToSendBack = await this.tagEntity.findOne(id)

        return tagToSendBack;
    }

    async addNewTag(tag: AddTagDto){
        
        return this.tagEntity.save(tag)

    }

    async updateTag(id: number, tagUpdated: Partial<TagEntity>){ 

    let tagFound = await this.tagEntity.preload({id, ...tagUpdated})

    if(!tagFound){

        throw new NotFoundException(`Le tag d'id ${id} n'existe pas`)

    }
    else{

        return await this.tagEntity.save(tagFound);

    }
}

async deleteTag(id: number){
    const tagToRemove = await this.tagEntity.findOne(id);
    if(! tagToRemove){
        throw new NotFoundException(`Le tag d'id ${id} n'existe pas`)
    }
    return await this.tagEntity.remove(tagToRemove);
}

}
