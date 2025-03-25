import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type VariantDocument = Variant & Document;

@Schema()
export class Variant {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  modelId: string; // Foreign Key to Model
}

export const VariantSchema = SchemaFactory.createForClass(Variant);
