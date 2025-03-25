import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ModelsController } from './models.controller';
import { ModelsService } from './models.service';
import { Model, ModelSchema } from './models.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: Model.name, schema: ModelSchema }])],
  controllers: [ModelsController],
  providers: [ModelsService],
})
export class ModelsModule {}
