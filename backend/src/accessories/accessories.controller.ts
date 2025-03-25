import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { AccessoriesService } from './accessories.service';

@Controller('accessories')
export class AccessoriesController {
  constructor(private readonly accessoriesService: AccessoriesService) {}

  // Create Accessory
  @Post()
  async createAccessory(@Body() data: any) {
    return this.accessoriesService.createAccessory(data);
  }

  // Get All Accessories
  @Get()
  async getAllAccessories() {
    return this.accessoriesService.getAllAccessories();
  }

  // Get Accessory by ID
  @Get(':id')
  async getAccessoryById(@Param('id') id: string) {
    return this.accessoriesService.getAccessoryById(id);
  }

  // Update Accessory
  @Put(':id')
  async updateAccessory(@Param('id') id: string, @Body() data: any) {
    return this.accessoriesService.updateAccessory(id, data);
  }

  // Delete Accessory
  @Delete(':id')
  async deleteAccessory(@Param('id') id: string) {
    return this.accessoriesService.deleteAccessory(id);
  }
}
