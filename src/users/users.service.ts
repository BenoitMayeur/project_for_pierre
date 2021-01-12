import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddUserDto } from 'src/dto/addUserDto';
import { Repository } from 'typeorm';
import { UserEntity } from './entity/users.entity';

@Injectable()
export class UsersService {
    
    constructor(
        @InjectRepository(UserEntity)
        private userEntity: Repository<UserEntity>
        ){

    }

    async getListUsers(): Promise<UserEntity[]>{

        return await this.userEntity.find()

    }

    async getUserById(id): Promise<UserEntity>{
        let userToSendBack = await this.userEntity.findOne(id)

        return userToSendBack;
    }

    async addNewUser(user: AddUserDto){
        
        return this.userEntity.save(user)

    }

    async updateUser(id: number, userUpdated: Partial<UserEntity>){ 

    let userFound = await this.userEntity.preload({id, ...userUpdated})

        if(!userFound){

            throw new NotFoundException(`L'utilisateur d'id ${id} n'existe pas`)

        }
        else{

            return await this.userEntity.save(userFound);

        }
    }

    async deleteUser(id: number){
        const userToRemove = await this.userEntity.findOne(id);
        if(! userToRemove){
            throw new NotFoundException(`L'utilisateur d'id ${id} n'existe pas`)
        }
        return await this.userEntity.remove(userToRemove);
    }
}
