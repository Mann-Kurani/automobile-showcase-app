import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ModelsController } from './models.controller';
import { ModelsService } from './models.service';
import { Model, ModelSchema } from './models.model';
import { VariantSchema } from '../variants/variants.schema';
import { FeatureSchema } from '../features/features.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Model', schema: ModelSchema },
      { name: 'Variant', schema: VariantSchema }, // ✅ Register Variants
      { name: 'Feature', schema: FeatureSchema }  // ✅ Register Features
    ])
  ],
  controllers: [ModelsController],
  providers: [ModelsService]
})
export class ModelsModule {}





