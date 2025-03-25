import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Variant extends Document {
  @Prop({ required: true })
  model_id: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  price: number;

  @Prop({ type: [String] }) // Array of Color IDs
  colors: string[];

  @Prop({ type: [String] }) // Array of Accessory IDs
  accessories: string[];

  @Prop({ type: [String] }) // Array of Feature IDs
  features: string[];
}

export type VariantDocument = Variant & Document;
export const VariantSchema = SchemaFactory.createForClass(Variant);
