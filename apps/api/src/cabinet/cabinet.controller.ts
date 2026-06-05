import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { CabinetService } from './cabinet.service';
import { CreateCabinetDto } from './dto/create-cabinet.dto';
import { UpdateCabinetDto } from './dto/update-cabinet.dto';

@Controller('cabinets')
export class CabinetController {
  constructor(private readonly cabinetService: CabinetService) {}

  @Get()
  findAll() {
    return this.cabinetService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cabinetService.findOne(parseInt(id));
  }

  @Post()
  create(@Body() dto: CreateCabinetDto) {
    return this.cabinetService.create(dto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateCabinetDto) {
    return this.cabinetService.update(parseInt(id), dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.cabinetService.delete(parseInt(id));
  }
}
