import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VariantsService } from './variants.service';
import { VariantsController } from './variants.controller';
import { VariantSchema } from './variants.model'; // ✅ Import Schema Only

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Variant', schema: VariantSchema }])
  ],
  providers: [VariantsService],
  controllers: [VariantsController]
})
export class VariantsModule {}
