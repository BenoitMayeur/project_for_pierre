import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { AddMeasureUnitDto } from 'src/dto/addMeasureUnit';
import { MesasureUnitsEntity } from './entity/measureunit.entity';
import { MeasureunitsService } from './measureunits.service';

@Controller('measureunits')
export class MeasureunitsController {
    constructor(
        private measureunitsService: MeasureunitsService
    ){}

/*
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles("EDITOR")*/
    @Get()
    getListMU(){

        return this.measureunitsService.getListMeasuresUnits();
    }

    @Get('/:id')
    getMUById(
        @Param('id', ParseIntPipe)id
    ){
        return this.measureunitsService.getMeasureUnitById(id);
    }

    @Post()
    addCategory(@Body() measureUnit: AddMeasureUnitDto){
        
        return this.measureunitsService.addNewMU(measureUnit);
    }

   // @UseGuards(JwtAuthGuard)
    @Patch('/:id')
    updateMU(
        @Param('id', ParseIntPipe)id,
        @Body()updatedCategory: Partial<MesasureUnitsEntity>
    ){

        return this.measureunitsService.updateMeasure(id, updatedCategory);
    }

    //@UseGuards(JwtAuthGuard)
    @Delete('/:id')
    deleteMU(
        @Param('id', ParseIntPipe)id
    ){
        return this.measureunitsService.deleteMeasureUnit(id);
    }

}
