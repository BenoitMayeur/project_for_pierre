import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ImageEntity } from './entity/images.entity';
import { AddImageDto } from '../dto/addImageDto';


@Injectable()
export class ImagesService {

    constructor(
        @InjectRepository(ImageEntity)
        private imageEntity: Repository<ImageEntity>
        ){

    }

    async getListImages(): Promise<ImageEntity[]>{

        return await this.imageEntity.find()

    }

    async getImageById(id): Promise<ImageEntity>{
        let imageToSendBack = await this.imageEntity.findOne(id)

        return imageToSendBack;
    }

    async addNewImage(image: AddImageDto){
 
        return this.imageEntity.save({...image, recipe: {id: image.id_recipe}})

    }

    async updateImage(id: number, imageUpdated: Partial<ImageEntity>){ 

        let imageFound = await this.imageEntity.preload({id, ...imageUpdated})

        if(!imageFound){

            throw new NotFoundException(`L'image d'id ${id} n'existe pas`)

        }
        else{

            return await this.imageEntity.save(imageFound);

        }
    }

    async deleteImage(id: number){
        const imageToRemove = await this.imageEntity.findOne(id);
        if(! imageToRemove){
            throw new NotFoundException(`L'image d'id ${id} n'existe pas`)
        }
        return await this.imageEntity.remove(imageToRemove);
    }


}
