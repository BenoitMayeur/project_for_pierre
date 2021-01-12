import { Module } from '@nestjs/common';
import { StarsService } from './stars.service';
import { StarsController } from './stars.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StarEntity } from './entity/star.entity';

@Module({
  providers: [StarsService],
  controllers: [StarsController],
  imports: [TypeOrmModule.forFeature([StarEntity]),
],
})
export class StarsModule {}
