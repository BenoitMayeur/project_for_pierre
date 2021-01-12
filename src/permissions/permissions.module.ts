import { Module } from '@nestjs/common';
import { PermissionsService } from './permissions.service';
import { PermissionsController } from './permissions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PermissionEntity } from './entity/permission.entity'

@Module({
  providers: [PermissionsService],
  controllers: [PermissionsController],
  imports: [TypeOrmModule.forFeature([PermissionEntity])]
})
export class PermissionsModule {}
