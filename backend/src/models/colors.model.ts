import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Color extends Document {
  @Prop({ required: true })
  variant_id: string; // Reference to Variant

  @Prop()
  name: string;

  @Prop()
  hex_code: string;

  @Prop()
  price: number;
}

export const ColorSchema = SchemaFactory.createForClass(Color);
