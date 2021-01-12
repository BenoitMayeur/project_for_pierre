import { Body, Controller, Get, Param, ParseIntPipe, Patch } from '@nestjs/common';
import { RoleEntity } from './entity/roles.entity';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {


    constructor(
        private rolesService: RolesService
    ){}

/*
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles("EDITOR")*/
    @Get()
    getListRoles(){

        return this.rolesService.getListRoles();
    }

    @Get('/:id')
    getRoleById(
        @Param('id', ParseIntPipe)id
    ){
        return this.rolesService.getRoleById(id);
    }

   // @UseGuards(JwtAuthGuard)
   @Patch('/:id')
   updateRole(
       @Param('id', ParseIntPipe)id,
       @Body()updatedRole: Partial<RoleEntity>
   ){

       return this.rolesService.updateRole(id, updatedRole);
   }

}
