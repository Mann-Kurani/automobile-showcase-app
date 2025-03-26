import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ModelsService } from './models.service';

@Controller('models')
export class ModelsController {
  constructor(private readonly modelsService: ModelsService) {}

  // ✅ Create a New Model
  @Post()
  async createModel(@Body() data: any) {
    return this.modelsService.createModel(data);
  }

  // ✅ Get All Models with Variants Embedded
  @Get()
  async getAllModels() {
    const models = await this.modelsService.getAllModels();
    return models.map(model => ({
      ...model,
      variants: model.variants || [] // ✅ Ensure variants are included
    }));
  }

  // ✅ Get Model by ID (Including Variants)
  @Get(':id')
  async getModelById(@Param('id') id: string) {
    const model = await this.modelsService.getModelWithVariants(id);
    if (!model) {
      return { message: 'Model not found' };
    }
    return model;
  }

  // ✅ Update Model
  @Put(':id')
  async updateModel(@Param('id') id: string, @Body() data: any) {
    return this.modelsService.updateModel(id, data);
  }

  // ✅ Delete Model
  @Delete(':id')
  async deleteModel(@Param('id') id: string) {
    return this.modelsService.deleteModel(id);
  }
}
