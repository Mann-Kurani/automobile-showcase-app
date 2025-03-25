import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FeatureDocument = Feature & Document;

@Schema()
export class Feature {
  @Prop({ required: true })
  type: string;

  @Prop()
  media_url: string;

  @Prop({ required: true })
  modelId: string; // Foreign Key to Model
}

export const FeatureSchema = SchemaFactory.createForClass(Feature);
