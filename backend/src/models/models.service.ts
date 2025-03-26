import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Model as ModelEntity, ModelDocument } from './models.model';
import { VariantDocument } from '../variants/variants.model';

@Injectable()
export class ModelsService {
  constructor(
    @InjectModel('Model') private modelModel: Model<ModelDocument>,
    @InjectModel('Variant') private variantModel: Model<VariantDocument>
  ) {}

  // ✅ Get All Models & Populate Variants
  async getAllModels() {
    const models = await this.modelModel
      .find()
      .populate({ path: 'variants', model: 'Variant' }) // ✅ Ensure population
      .exec();

    return models.map((model) => model.toObject());
  }

  // ✅ Get Model by ID & Populate Variants
  async getModelById(id: string) {
    const model = await this.modelModel
      .findById(id)
      .populate({ path: 'variants', model: 'Variant' }) // ✅ Ensure variants are included
      .exec();

    if (!model) throw new NotFoundException('Model not found');
    return model.toObject();
  }

  // ✅ Create a Model
  async createModel(data: any): Promise<ModelDocument> {
    const newModel = new this.modelModel(data);
    return newModel.save();
  }

  // ✅ Get Model by ID with Variants
  async getModelWithVariants(id: string) {
    const model = await this.modelModel
      .findById(id)
      .populate({ path: 'variants', model: 'Variant' }) // ✅ Ensure population
      .exec();
    if (!model) throw new NotFoundException('Model not found');
    return model.toObject();
  }

  // ✅ Update Model
  async updateModel(id: string, data: any): Promise<ModelDocument> {
    const updatedModel = await this.modelModel
      .findByIdAndUpdate(id, data, { new: true })
      .populate({ path: 'variants', model: 'Variant' }) // ✅ Ensure updated model has variants
      .exec();

    if (!updatedModel) throw new NotFoundException('Model not found');
    return updatedModel;
  }

  // ✅ Delete Model
  async deleteModel(id: string): Promise<void> {
    const result = await this.modelModel.findByIdAndDelete(id).exec();
    if (!result) throw new NotFoundException('Model not found');
  }
}
