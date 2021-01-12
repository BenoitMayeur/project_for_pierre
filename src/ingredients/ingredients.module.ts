import { Module } from '@nestjs/common';
import { IngredientsService } from './ingredients.service';
import { IngredientsController } from './ingredients.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IngredientEntity } from './entity/ingredient.entity';

@Module({
  providers: [IngredientsService],
  controllers: [IngredientsController],
  imports: [TypeOrmModule.forFeature([IngredientEntity])]
})
export class IngredientsModule {}
