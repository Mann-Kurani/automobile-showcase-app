import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { VariantsService } from './variants.service';

@Controller('variants')
export class VariantsController {
  constructor(private readonly variantsService: VariantsService) {}

  // Create Variant
  @Post()
  async createVariant(@Body() data: any) {
    return this.variantsService.createVariant(data);
  }

  // Get All Variants
  @Get()
  async getAllVariants() {
    return this.variantsService.getAllVariants();
  }

  // Get Variant by ID
  @Get(':id')
  async getVariantById(@Param('id') id: string) {
    return this.variantsService.getVariantById(id);
  }

  // Update Variant
  @Put(':id')
  async updateVariant(@Param('id') id: string, @Body() data: any) {
    return this.variantsService.updateVariant(id, data);
  }

  // Delete Variant
  @Delete(':id')
  async deleteVariant(@Param('id') id: string) {
    return this.variantsService.deleteVariant(id);
  }
}
