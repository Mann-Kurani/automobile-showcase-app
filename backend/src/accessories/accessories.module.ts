import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccessoriesController } from './accessories.controller';
import { AccessoriesService } from './accessories.service';
import { Accessory, AccessorySchema } from './accessories.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: Accessory.name, schema: AccessorySchema }])],
  controllers: [AccessoriesController],
  providers: [AccessoriesService],
})
export class AccessoriesModule {}
