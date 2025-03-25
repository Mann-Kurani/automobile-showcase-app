import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Model extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  brand: string;

  @Prop()
  description: string;

  @Prop({ type: [{ type: String }] }) // Array of Variant IDs
  variants: string[];
}

// Generate Mongoose schema
export const ModelSchema = SchemaFactory.createForClass(Model);

// Export ModelDocument correctly
export type ModelDocument = Model & Document;
