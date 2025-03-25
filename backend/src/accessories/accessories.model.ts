import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Accessory extends Document {
  @Prop({ required: true })
  variant_id: string; // Reference to Variant

  @Prop({ required: true })
  name: string;

  @Prop()
  category: string;

  @Prop({ required: true })
  price: number;

  @Prop()
  image_url: string;
}

export type AccessoryDocument = Accessory & Document;
export const AccessorySchema = SchemaFactory.createForClass(Accessory);
