
import { PermissionsEnum } from "src/enums/permissions.enums";
import { RoleEntity } from "src/roles/entity/roles.entity";
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('permissions')

export class PermissionEntity{
    
    @PrimaryGeneratedColumn()
    id: number;
    @Column({
        type: 'enum',
        default: PermissionsEnum.LR,
        enum: PermissionsEnum
    })
    name: PermissionsEnum;

    @ManyToMany(
        type => RoleEntity,
        role=> role.permissions
        )

    role : RoleEntity[] ;

}