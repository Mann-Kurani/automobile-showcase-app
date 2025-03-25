import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Accessory, AccessoryDocument } from './accessories.model';

@Injectable()
export class AccessoriesService {
  constructor(@InjectModel(Accessory.name) private accessoryModel: Model<AccessoryDocument>) {}

  // Create Accessory
  async createAccessory(data: any): Promise<AccessoryDocument> {
    const newAccessory = new this.accessoryModel(data);
    return newAccessory.save();
  }

  // Get All Accessories
  async getAllAccessories(): Promise<AccessoryDocument[]> {
    return this.accessoryModel.find().exec();
  }

  // Get Accessory by ID
  async getAccessoryById(id: string): Promise<AccessoryDocument> {
    const accessory = await this.accessoryModel.findById(id).exec();
    if (!accessory) throw new NotFoundException('Accessory not found');
    return accessory;
  }

  // Update Accessory
  async updateAccessory(id: string, data: any): Promise<AccessoryDocument> {
    const updatedAccessory = await this.accessoryModel.findByIdAndUpdate(id, data, { new: true }).exec();
    if (!updatedAccessory) throw new NotFoundException('Accessory not found');
    return updatedAccessory;
  }

  // Delete Accessory
  async deleteAccessory(id: string): Promise<void> {
    const result = await this.accessoryModel.findByIdAndDelete(id).exec();
    if (!result) throw new NotFoundException('Accessory not found');
  }
}
