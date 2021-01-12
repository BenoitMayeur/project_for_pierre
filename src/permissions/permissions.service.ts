import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PermissionEntity } from './entity/permission.entity';

@Injectable()
export class PermissionsService {

    constructor(
        @InjectRepository(PermissionEntity)
        private permissionEntity: Repository<PermissionEntity>
        ){

    }

    async getListPermissions(): Promise<PermissionEntity[]>{

        return await this.permissionEntity.find()

    }


}
