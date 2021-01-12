

import { RolesEnum } from "src/enums/roles.enums";

import { PermissionEntity } from "src/permissions/entity/permission.entity";

import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from '../../users/entity/users.entity'

@Entity('roles')

export class RoleEntity{
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'enum',
        default: RolesEnum.ANONYMOUS,
        enum: RolesEnum
    })
    name: RolesEnum;

    @JoinTable()
    @ManyToMany(
        type => PermissionEntity,
        permission=> permission.name,
        {
            cascade: true,
            eager : true 
        })
    
    permissions : Partial<PermissionEntity[]>;

    @OneToMany(
        type => UserEntity,
        (user) => user.role,{
            cascade: true
        }
    )
    users: UserEntity[];

}