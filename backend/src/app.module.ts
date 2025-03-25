import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Model, ModelSchema } from './models/models.model';
import { Variant, VariantSchema } from './models/variants.model';
import { Color, ColorSchema } from './models/colors.model';
import { Accessory, AccessorySchema } from './models/accessories.model';
import { Feature, FeatureSchema } from './models/features.model';
import { ModelsModule } from './models/models.module';
import { VariantsModule } from './variants/variants.module';
import { ColorsModule } from './colors/colors.module';
import { AccessoriesModule } from './accessories/accessories.module';
import { FeaturesModule } from './features/features.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/model_showcase_db'),
    MongooseModule.forFeature([
      { name: Model.name, schema: ModelSchema },
      { name: Variant.name, schema: VariantSchema },
      { name: Color.name, schema: ColorSchema },
      { name: Accessory.name, schema: AccessorySchema },
      { name: Feature.name, schema: FeatureSchema },
    ]),
    ModelsModule,
    VariantsModule,
    ColorsModule,
    AccessoriesModule,
    FeaturesModule,
  ],
})
export class AppModule {}
