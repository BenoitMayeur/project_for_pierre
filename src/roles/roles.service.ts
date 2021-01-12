import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RoleEntity } from './entity/roles.entity';

@Injectable()
export class RolesService {
    constructor(
        @InjectRepository(RoleEntity)
        private roleEntity: Repository<RoleEntity>
        ){

    }

    async getListRoles(): Promise<RoleEntity[]>{

        return await this.roleEntity.find()

    }

    async getRoleById(id): Promise<RoleEntity>{
        let roleToSendBack = await this.roleEntity.findOne(id)

        return roleToSendBack;
    }

    async updateRole(id: number, roleUpdated: Partial<RoleEntity>){ 

        let roleFound = await this.roleEntity.preload({id, ...roleUpdated})
        roleFound.permissions = roleUpdated.permissions;

        if(!roleFound){
    
            throw new NotFoundException(`Le role d'id ${id} n'existe pas`)
    
        }
        else{
    
            return await this.roleEntity.save(roleFound);
    
        }
    }

}
