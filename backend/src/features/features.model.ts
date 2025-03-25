import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Feature extends Document {
  @Prop({ required: true })
  variant_id: string; // Reference to Variant

  @Prop({ required: true })
  type: string; // Image or Video

  @Prop({ required: true })
  media_url: string; // URL to media file
}

export const FeatureSchema = SchemaFactory.createForClass(Feature);
export type FeatureDocument = Feature & Document;