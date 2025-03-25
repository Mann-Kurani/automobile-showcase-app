import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VariantsController } from './variants.controller';
import { VariantsService } from './variants.service';
import { Variant, VariantSchema } from './variants.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: Variant.name, schema: VariantSchema }])],
  controllers: [VariantsController],
  providers: [VariantsService],
})
export class VariantsModule {}
