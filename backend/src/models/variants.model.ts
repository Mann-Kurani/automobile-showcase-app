import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Variant extends Document {
  @Prop({ required: true })
  model_id: string; // Reference to Model

  @Prop()
  name: string;

  @Prop()
  price: number;

  @Prop({ type: [{ type: String }] }) // Array of Color IDs
  colors: string[];

  @Prop({ type: [{ type: String }] }) // Array of Accessory IDs
  accessories: string[];

  @Prop({ type: [{ type: String }] }) // Array of Feature IDs
  features: string[];
}

export const VariantSchema = SchemaFactory.createForClass(Variant);
