import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MesasureUnitsEntity } from 'src/measureunits/entity/measureunit.entity';
import { MixRecipesIngredientsController } from './mix-recipes-ingredients.controller';
import { MixRecipesIngredientsService } from './mix-recipes-ingredients.service';

@Module({

    controllers: [MixRecipesIngredientsController],
    providers: [MixRecipesIngredientsService],
    imports: [TypeOrmModule.forFeature([MesasureUnitsEntity])]

})
export class MixRecipesIngredientsModule {}
