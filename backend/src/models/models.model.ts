import { Schema, Document, model } from 'mongoose';

// ✅ Define Sub-Schemas (Embedded inside Variant)
export interface Color {
  name: string;
  price: number;
  hexCode: string;
}

export interface Feature {
  type: 'image' | 'video';
  mediaUrl: string;
}

export interface VariantDocument extends Document {
  name: string;
  price: number;
  colors: Color[];
  accessories: string[]; // Array of image URLs
  features: Feature[];
}

// ✅ Main Model Interface
export interface ModelDocument extends Document {
  _id: string;
  name: string;
  brand: string;
  description: string;
  price: number;
}

// ✅ Model Schema (Stores Variant References)
export const ModelSchema = new Schema<ModelDocument>({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true }
});
// ✅ Export Model
export const Model = model<ModelDocument>('Model', ModelSchema);
