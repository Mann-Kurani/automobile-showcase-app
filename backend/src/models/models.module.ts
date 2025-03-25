import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ModelsService } from './models.service';
import { ModelsController } from './models.controller';
import { Model, ModelSchema } from './models.model';
import { Variant, VariantSchema } from '../variants/variants.model'; // ✅ Import Variants

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Model', schema: ModelSchema },
      { name: 'Variant', schema: VariantSchema } // ✅ Register Variants
    ])
  ],
  controllers: [ModelsController],
  providers: [ModelsService],
  exports: [ModelsService]
})
export class ModelsModule {}
