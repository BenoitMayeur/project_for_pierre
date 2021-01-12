import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { AddUserDto } from 'src/dto/addUserDto';
import { UserEntity } from './entity/users.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {


    constructor(
        private usersService: UsersService
    ){}

/*
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles("EDITOR")*/
    @Get()
    getListUsers(){

        return this.usersService.getListUsers();
    }

    @Get('/:id')
    getUserById(
        @Param('id', ParseIntPipe)id
    ){
        return this.usersService.getUserById(id);
    }

    @Post()
    addUser(@Body() user: AddUserDto){
        
        return this.usersService.addNewUser(user);
    }

   // @UseGuards(JwtAuthGuard)
    @Patch('/:id')
    updateUser(
        @Param('id', ParseIntPipe)id,
        @Body()updatedUser: Partial<UserEntity>
    ){

        return this.usersService.updateUser(id, updatedUser);
    }

    //@UseGuards(JwtAuthGuard)
    @Delete('/:id')
    deleteUser(
        @Param('id', ParseIntPipe)id
    ){
        return this.usersService.deleteUser(id);
    }

}
