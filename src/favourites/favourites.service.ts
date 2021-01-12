import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddFavouriteDto } from 'src/dto/addFavouriteDto';
import { Repository } from 'typeorm';
import { FavouriteEntity } from './entity/favourite.entity';

@Injectable()
export class FavouritesService {
    
    constructor(
        @InjectRepository(FavouriteEntity)
        private favouriteEntity: Repository<FavouriteEntity>
        ){

    }

    async getListFavourites(): Promise<FavouriteEntity[]>{

        return await this.favouriteEntity.find()

    }

    async getFavouriteById(id): Promise<FavouriteEntity>{
        let favouriteToSendBack = await this.favouriteEntity.findOne(id)

        return favouriteToSendBack;
    }

    async addNewFavourite(favourite: AddFavouriteDto){
        
        return this.favouriteEntity.save(favourite)

    }

    async updateFavourite(id: number, favouriteUpdated: Partial<FavouriteEntity>){ 

    let favouriteFound = await this.favouriteEntity.preload({id, ...favouriteUpdated})

    if(!favouriteFound){

        throw new NotFoundException(`La recette favorite d'id ${id} n'existe pas`)

    }
    else{

        return await this.favouriteEntity.save(favouriteFound);

    }
}

    async deleteFavourite(id: number){
        const favouriteToRemove = await this.favouriteEntity.findOne(id);
        if(! favouriteToRemove){
            throw new NotFoundException(`La recette favorite d'id ${id} n'existe pas`)
        }
        return await this.favouriteEntity.remove(favouriteToRemove);
    }


}

