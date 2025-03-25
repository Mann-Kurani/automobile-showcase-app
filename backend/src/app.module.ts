import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Model, ModelSchema } from './models/models.model';
import { Variant, VariantSchema } from './variants/variants.model'; // ✅ Keep only these
import { ModelsModule } from './models/models.module';
import { VariantsModule } from './variants/variants.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/model_showcase_db'), // ✅ Database connection
    MongooseModule.forFeature([
      { name: Model.name, schema: ModelSchema },
      { name: Variant.name, schema: VariantSchema } // ✅ Only Models & Variants are needed
    ]),
    ModelsModule,
    VariantsModule
  ],
})
export class AppModule {}
