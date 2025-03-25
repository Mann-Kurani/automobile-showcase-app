import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Feature extends Document {
  @Prop({ required: true })
  variant_id: string; // Reference to Variant

  @Prop()
  type: string; // Image or Video

  @Prop()
  media_url: string;
}

export const FeatureSchema = SchemaFactory.createForClass(Feature);
