import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Color, ColorDocument } from './colors.model';

@Injectable()
export class ColorsService {
  constructor(@InjectModel(Color.name) private ColorModel: Model<ColorDocument>) {}

  // Create Color
  async createColor(data: any): Promise<ColorDocument> {
    const newColor = new this.ColorModel(data);
    return newColor.save();
  }

  // Get All Colors
  async getAllColors(): Promise<ColorDocument[]> {
    return this.ColorModel.find().exec();
  }

  // Get Color by ID
  async getColorById(id: string): Promise<ColorDocument> {
    const Color = await this.ColorModel.findById(id).exec();
    if (!Color) throw new NotFoundException('Color not found');
    return Color;
  }

  // Update Color
  async updateColor(id: string, data: any): Promise<ColorDocument> {
    const updatedColor = await this.ColorModel.findByIdAndUpdate(id, data, { new: true }).exec();
    if (!updatedColor) throw new NotFoundException('Color not found');
    return updatedColor;
  }

  // Delete Color
  async deleteColor(id: string): Promise<void> {
    const result = await this.ColorModel.findByIdAndDelete(id).exec();
    if (!result) throw new NotFoundException('Color not found');
  }
}
