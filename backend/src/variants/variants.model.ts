import { Schema, Document, model } from 'mongoose';

// ✅ Define Sub-Schemas
export interface Color {
  name: string;
  price: number;
  hexCode: string;
}

export interface Feature {
  type: 'image' | 'video';
  mediaUrl: string;
}

export interface Variant {
  name: string;
  price: number;
  colors: Color[];
  accessories: string[];
  features: Feature[];
}

// ✅ Main Model Interface
export interface ModelDocument extends Document {
  name: string;
  brand: string;
  description: string;
  price: number;
  variants: Variant[]; // ✅ EMBED Variants Here
}

// ✅ Schema Definitions
const ColorSchema = new Schema<Color>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  hexCode: { type: String, required: true }
});

const FeatureSchema = new Schema<Feature>({
  type: { type: String, enum: ['image', 'video'], required: true },
  mediaUrl: { type: String, required: true }
});

// ✅ Variant Schema (Embedded Inside Model)
const VariantSchema = new Schema<Variant>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  colors: [ColorSchema],
  accessories: [{ type: String }],
  features: [FeatureSchema]
});

// ✅ Model Schema (Embedding Variants)
export const ModelSchema = new Schema<ModelDocument>({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  variants: { type: [VariantSchema], default: [] } // ✅ EMBED VARIANTS INSIDE MODELS
});

// ✅ Export Model
export const Model = model<ModelDocument>('Model', ModelSchema);
