import { Schema, Document, model } from 'mongoose';

// ✅ Define Embedded Sub-Schemas
export interface Color {
  name: string;
  price: number;
  hexCode: string;
}

export interface Feature {
  type: 'image' | 'video';
  mediaUrl: string;
}

// ✅ Variant Schema (Embedded Inside Model)
export interface Variant {
  name: string;
  price: number;
  colors: Color[];
  accessories: string[];
  features: Feature[];
}

// ✅ Mongoose Variant Schema
export const VariantSchema = new Schema<Variant>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  colors: [{ name: String, price: Number, hexCode: String }],
  accessories: [{ type: String }],
  features: [{ type: { type: String, enum: ['image', 'video'] }, mediaUrl: String }]
});

// ✅ Explicitly Export Model & Schema
export const VariantModel = model('Variant', VariantSchema);
export type VariantDocument = Document & Variant;
