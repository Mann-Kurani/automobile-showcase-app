import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ColorsService } from './colors.service';

@Controller('colors')
export class ColorsController {
  constructor(private readonly colorsService: ColorsService) {}

  // Create Color
  @Post()
  async createColor(@Body() data: any) {
    return this.colorsService.createColor(data);
  }

  // Get All Colors
  @Get()
  async getAllColors() {
    return this.colorsService.getAllColors();
  }

  // Get Color by ID
  @Get(':id')
  async getColorById(@Param('id') id: string) {
    return this.colorsService.getColorById(id);
  }

  // Update Color
  @Put(':id')
  async updateColor(@Param('id') id: string, @Body() data: any) {
    return this.colorsService.updateColor(id, data);
  }

  // Delete Color
  @Delete(':id')
  async deleteColor(@Param('id') id: string) {
    return this.colorsService.deleteColor(id);
  }
}
