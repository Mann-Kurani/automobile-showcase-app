import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Color extends Document {
  @Prop({ required: true })
  variant_id: string; // Reference to Variant

  @Prop({ required: true })
  name: string; // Color name (e.g., Red, Blue)

  @Prop({ required: true })
  hex_code: string; // Hex color code (e.g., #FF0000)

  @Prop({ required: true })
  price: number; // Additional price for the color (if any)
}

export const ColorSchema = SchemaFactory.createForClass(Color);
export type ColorDocument = Color & Document;
