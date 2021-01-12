import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddCategoryDto } from 'src/dto/addCategoryDto';
import { AddMeasureUnitDto } from 'src/dto/addMeasureUnit';
import { Repository } from 'typeorm';
import { MesasureUnitsEntity } from './entity/measureunit.entity';

@Injectable()
export class MeasureunitsService {

    constructor(
        @InjectRepository(MesasureUnitsEntity)
        private mesasureUnitsEntity: Repository<MesasureUnitsEntity>
        ){

    }

    async getListMeasuresUnits(): Promise<MesasureUnitsEntity[]>{

        return await this.mesasureUnitsEntity.find()

    }

    async getMeasureUnitById(id): Promise<MesasureUnitsEntity>{
        let unitToSendBack = await this.mesasureUnitsEntity.findOne(id)

        return unitToSendBack;
    }

    async addNewMU(measureUnit: AddMeasureUnitDto){
        
        return this.mesasureUnitsEntity.save(measureUnit)

    }

    async updateMeasure(id: number, MUUpdated: Partial<MesasureUnitsEntity>){ 

    let measureUnitFound = await this.mesasureUnitsEntity.preload({id, ...MUUpdated})

    if(!measureUnitFound){

        throw new NotFoundException(`La mesure d'id ${id} n'existe pas`)

    }
    else{

        return await this.mesasureUnitsEntity.save(measureUnitFound);

    }
}

    async deleteMeasureUnit(id: number){
        const MUToRemove = await this.mesasureUnitsEntity.findOne(id);
        if(! MUToRemove){
            throw new NotFoundException(`La mesure d'id ${id} n'existe pas`)
        }
        return await this.mesasureUnitsEntity.remove(MUToRemove);
    }


}
