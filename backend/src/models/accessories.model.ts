import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Accessory extends Document {
  @Prop({ required: true })
  variant_id: string; // Reference to Variant

  @Prop()
  category: string;

  @Prop()
  image_url: string;
}

export const AccessorySchema = SchemaFactory.createForClass(Accessory);
