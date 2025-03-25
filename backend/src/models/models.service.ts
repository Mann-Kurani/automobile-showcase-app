import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Model as ModelEntity, ModelDocument } from './models.model';
import { Variant, VariantDocument } from '../variants/variants.model'; // ✅ Import Variant Model

@Injectable()
export class ModelsService {
  constructor(
    @InjectModel('Model') private modelModel: Model<ModelDocument>,
    @InjectModel('Variant') private variantModel: Model<VariantDocument> // ✅ Inject Variant Collection
  ) {}

  // ✅ Create a Model
  async createModel(data: any): Promise<ModelDocument> {
    const newModel = new this.modelModel(data);
    return newModel.save();
  }

  // ✅ Get All Models & Attach Variants
  async getAllModels() {
    const models = await this.modelModel.find().populate('variants').exec();
    return models.map(model => model.toObject());
}


  // ✅ Create Variants for a Model
  async createVariantsForModel(modelId: string) {
    const model = await this.modelModel.findById(modelId).exec();
    if (!model) throw new NotFoundException('Model not found');

    const basePrice = model.price || 50000; // ✅ Default Price
    const newVariants = [
      {
        modelId,
        name: `${model.name} Base`,
        price: basePrice,
        colors: [
          { name: 'Red', price: 500, hexCode: '#FF0000' },
          { name: 'Blue', price: 700, hexCode: '#0000FF' },
          { name: 'Black', price: 1000, hexCode: '#000000' }
        ],
        accessories: [
          'https://example.com/accessory1.jpg',
          'https://example.com/accessory2.jpg'
        ],
        features: [
          { type: 'image', mediaUrl: 'https://example.com/feature1.jpg' },
          { type: 'video', mediaUrl: 'https://example.com/feature2.mp4' }
        ]
      },
      {
        modelId,
        name: `${model.name} Sport`,
        price: basePrice + 5000,
        colors: [
          { name: 'White', price: 600, hexCode: '#FFFFFF' },
          { name: 'Grey', price: 800, hexCode: '#808080' }
        ],
        accessories: [
          'https://example.com/accessory3.jpg',
          'https://example.com/accessory4.jpg'
        ],
        features: [
          { type: 'image', mediaUrl: 'https://example.com/feature3.jpg' },
          { type: 'video', mediaUrl: 'https://example.com/feature4.mp4' }
        ]
      }
    ];

    // ✅ Save Variants to `variants` Collection
    return await this.variantModel.insertMany(newVariants);
  }

  // ✅ Get Model by ID with Variants
  async getModelById(id: string) {
    const model = await this.modelModel.findById(id).exec();
    if (!model) throw new NotFoundException('Model not found');

    // ✅ Fetch Variants Separately
    const variants = await this.variantModel.find({ modelId: id }).exec();
    return { ...model.toObject(), variants };
  }

  // ✅ Update Model
  async updateModel(id: string, data: any): Promise<ModelDocument> {
    const updatedModel = await this.modelModel.findByIdAndUpdate(id, data, { new: true }).exec();
    if (!updatedModel) throw new NotFoundException('Model not found');
    return updatedModel;
  }

  // ✅ Delete Model and Its Variants
  async deleteModel(id: string): Promise<void> {
    const result = await this.modelModel.findByIdAndDelete(id).exec();
    if (!result) throw new NotFoundException('Model not found');

    // ✅ Delete Related Variants
    await this.variantModel.deleteMany({ modelId: id }).exec();
  }
}
