import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TagsModule } from './tags/tags.module';

import { RecipesModule } from './recipes/recipes.module';

import { CategoriesModule } from './categories/categories.module';
import { ImagesController } from './images/images.controller';
import { ImagesModule } from './images/images.module';
import { MeasureunitsModule } from './measureunits/measureunits.module';
import { PermissionsModule } from './permissions/permissions.module';
import { RolesModule } from './roles/roles.module';
import { UsersModule } from './users/users.module';
import { MixRecipesIngredientsModule } from './mix_recipes_ingredients/mix-recipes-ingredients.module';
import { IngredientsModule } from './ingredients/ingredients.module';
import { FavouritesModule } from './favourites/favourites.module';
import { StarsModule } from './stars/stars.module';

import * as dotenv from 'dotenv';

dotenv.config()

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [TagsModule, 
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
    }),
    TagsModule,
    RecipesModule,
    CategoriesModule,
    ImagesModule,
    MeasureunitsModule,
    PermissionsModule,
    RolesModule,
    UsersModule,
    MixRecipesIngredientsModule,
    IngredientsModule,
    FavouritesModule,
    StarsModule

  ],

})
export class AppModule {}
