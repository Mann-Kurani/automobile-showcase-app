import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Model, ModelSchema } from './models/models.model';
import { VariantSchema } from './variants/variants.model'; // ✅ Import Schema Only
import { ModelsModule } from './models/models.module';
import { VariantsModule } from './variants/variants.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/model_showcase_db'),
    MongooseModule.forFeature([
      { name: 'Model', schema: ModelSchema }, // ✅ Fix Naming
      { name: 'Variant', schema: VariantSchema }, // ✅ Fix Naming
    ]),
    ModelsModule,
    VariantsModule
  ],
})
export class AppModule {}
