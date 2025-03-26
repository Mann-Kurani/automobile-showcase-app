import { Schema, Document, model, Types } from 'mongoose';

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
  name: string;
  brand: string;
  description: string;
  price: number;
  variants: VariantDocument[]; // ✅ Ensure it holds referenced Variant objects
}

// ✅ Schema Definition
export const ModelSchema = new Schema<ModelDocument>({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  variants: [{ type: Schema.Types.ObjectId, ref: 'Variant' }] // ✅ Reference to Variant collection
});



// ✅ Export Model
export const Model = model<ModelDocument>('Model', ModelSchema);
