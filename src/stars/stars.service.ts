import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddStarDto } from 'src/dto/addStarDto';
import { Repository } from 'typeorm';
import { StarEntity } from './entity/star.entity';

@Injectable()
export class StarsService {

    constructor(
        @InjectRepository(StarEntity)
        private starEntity: Repository<StarEntity>
        ){

    }

    async getListStars(): Promise<StarEntity[]>{

        return await this.starEntity.find()

    }

    async getStarsById(id): Promise<StarEntity>{
        let starToSendBack = await this.starEntity.findOne(id)

        return starToSendBack;
    }

    async getStargByIdRecipe(id){// Est-ce que ça ne serait pas mieux de faire ça ailleurs,
        // dans le service recette

        let {avgAmountStars} = await this.starEntity
            .createQueryBuilder("stars")
            .select("AVG(stars.marks)", "avg")
            .where("user.id", id)
            .getRawOne();

        return avgAmountStars;
    }

    async addNewStar(star: AddStarDto){
        
        return this.starEntity.save(star)

    }

    async updateStar(id: number, starUpdated: Partial<StarEntity>){ 

        let starFound = await this.starEntity.preload({id, ...starUpdated})

        if(!starFound){

            throw new NotFoundException(`La star d'id ${id} n'existe pas`)

        }
        else{

            return await this.starEntity.save(starFound);

        }
    }

}
