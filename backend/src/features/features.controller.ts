import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { FeaturesService } from './features.service';

@Controller('features')
export class FeaturesController {
  constructor(private readonly featuresService: FeaturesService) {}

  // Create Feature
  @Post()
  async createFeature(@Body() data: any) {
    return this.featuresService.createFeature(data);
  }

  // Get All Features
  @Get()
  async getAllFeatures() {
    return this.featuresService.getAllFeatures();
  }

  // Get Feature by ID
  @Get(':id')
  async getFeatureById(@Param('id') id: string) {
    return this.featuresService.getFeatureById(id);
  }

  // Update Feature
  @Put(':id')
  async updateFeature(@Param('id') id: string, @Body() data: any) {
    return this.featuresService.updateFeature(id, data);
  }

  // Delete Feature
  @Delete(':id')
  async deleteFeature(@Param('id') id: string) {
    return this.featuresService.deleteFeature(id);
  }
}
