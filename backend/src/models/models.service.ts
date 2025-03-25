import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Model as ModelEntity, ModelDocument } from './models.model';

@Injectable()
export class ModelsService {
  constructor(@InjectModel(ModelEntity.name) private modelModel: Model<ModelDocument>) {}

  // Create Model
  async createModel(data: any): Promise<ModelDocument> {
    const newModel = new this.modelModel(data);
    return newModel.save();
  }

  // Get All Models
  async getAllModels(): Promise<ModelDocument[]> {
    return this.modelModel.find().exec();
  }

  // Get Model by ID
  async getModelById(id: string): Promise<ModelDocument> {
    const model = await this.modelModel.findById(id).exec();
    if (!model) throw new NotFoundException('Model not found');
    return model;
  }

  // Update Model
  async updateModel(id: string, data: any): Promise<ModelDocument> {
    const updatedModel = await this.modelModel.findByIdAndUpdate(id, data, { new: true }).exec();
    if (!updatedModel) throw new NotFoundException('Model not found');
    return updatedModel;
  }

  // Delete Model
  async deleteModel(id: string): Promise<void> {
    const result = await this.modelModel.findByIdAndDelete(id).exec();
    if (!result) throw new NotFoundException('Model not found');
  }
}
