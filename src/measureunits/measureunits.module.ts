import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MesasureUnitsEntity } from './entity/measureunit.entity';
import { MeasureunitsController } from './measureunits.controller';
import { MeasureunitsService } from './measureunits.service';

@Module({
  controllers: [MeasureunitsController],
  providers: [MeasureunitsService],
  imports: [TypeOrmModule.forFeature([MesasureUnitsEntity])]
})
export class MeasureunitsModule {}
