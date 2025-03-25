import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ColorsController } from './colors.controller';
import { ColorsService } from './colors.service';
import { Color, ColorSchema } from './colors.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: Color.name, schema: ColorSchema }])],
  controllers: [ColorsController],
  providers: [ColorsService],
})
export class ColorsModule {}
