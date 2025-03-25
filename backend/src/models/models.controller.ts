import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ModelsService } from './models.service';

@Controller('models')
export class ModelsController {
  constructor(private readonly modelsService: ModelsService) {}

  // Create Model
  @Post()
  async createModel(@Body() data: any) {
    return this.modelsService.createModel(data);
  }

  // Get All Models
  @Get()
  async getAllModels() {
    return this.modelsService.getAllModels();
  }

  // Get Model by ID
  @Get(':id')
  async getModelById(@Param('id') id: string) {
    return this.modelsService.getModelWithDetails(id);
  }

  // Update Model
  @Put(':id')
  async updateModel(@Param('id') id: string, @Body() data: any) {
    return this.modelsService.updateModel(id, data);
  }

  // Delete Model
  @Delete(':id')
  async deleteModel(@Param('id') id: string) {
    return this.modelsService.deleteModel(id);
  }
}


