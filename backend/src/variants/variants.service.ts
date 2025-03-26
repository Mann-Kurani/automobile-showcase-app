import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { VariantDocument } from './variants.model'; // ✅ Import Document Only

@Injectable()
export class VariantsService {
  constructor(@InjectModel('Variant') private variantModel: Model<VariantDocument>) {}

  // ✅ Create Variant
  async createVariant(data: any): Promise<VariantDocument> {
    const newVariant = new this.variantModel(data);
    return newVariant.save();
  }

  // ✅ Get All Variants
  async getAllVariants(): Promise<VariantDocument[]> {
    return this.variantModel.find().exec();
  }

  // ✅ Get Variant by ID
  async getVariantById(id: string): Promise<VariantDocument> {
    const variant = await this.variantModel.findById(id).exec();
    if (!variant) throw new NotFoundException('Variant not found');
    return variant;
  }

  // ✅ Update Variant
  async updateVariant(id: string, data: any): Promise<VariantDocument> {
    const updatedVariant = await this.variantModel.findByIdAndUpdate(id, data, { new: true }).exec();
    if (!updatedVariant) throw new NotFoundException('Variant not found');
    return updatedVariant;
  }

  // ✅ Delete Variant
  async deleteVariant(id: string): Promise<void> {
    const result = await this.variantModel.findByIdAndDelete(id).exec();
    if (!result) throw new NotFoundException('Variant not found');
  }
}
