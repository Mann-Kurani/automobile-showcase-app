import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ModelsService } from './models.service';
import { ModelsController } from './models.controller';
import { Model, ModelSchema } from './models.model';
import { VariantSchema } from '../variants/variants.model'; // ✅ Import Only Schema

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Model', schema: ModelSchema },
      { name: 'Variant', schema: VariantSchema }
    ])
  ],
  providers: [ModelsService],
  controllers: [ModelsController]
})
export class ModelsModule {}
