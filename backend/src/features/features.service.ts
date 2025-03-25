import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Feature, FeatureDocument } from './features.model';

@Injectable()
export class FeaturesService {
  constructor(@InjectModel(Feature.name) private featureModel: Model<FeatureDocument>) {}

  // Create Feature
  async createFeature(data: any): Promise<FeatureDocument> {
    const newFeature = new this.featureModel(data);
    return newFeature.save();
  }

  // Get All Features
  async getAllFeatures(): Promise<FeatureDocument[]> {
    return this.featureModel.find().exec();
  }

  // Get Feature by ID
  async getFeatureById(id: string): Promise<FeatureDocument> {
    const feature = await this.featureModel.findById(id).exec();
    if (!feature) throw new NotFoundException('Feature not found');
    return feature;
  }

  // Update Feature
  async updateFeature(id: string, data: any): Promise<FeatureDocument> {
    const updatedFeature = await this.featureModel.findByIdAndUpdate(id, data, { new: true }).exec();
    if (!updatedFeature) throw new NotFoundException('Feature not found');
    return updatedFeature;
  }

  // Delete Feature
  async deleteFeature(id: string): Promise<void> {
    const result = await this.featureModel.findByIdAndDelete(id).exec();
    if (!result) throw new NotFoundException('Feature not found');
  }
}
