import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { InfirmierService } from './infirmier.service';
import { CreateInfirmierDto } from './dto/create-infirmier.dto';
import { UpdateInfirmierDto } from './dto/update-infirmier.dto';

@Controller('infirmiers')
export class InfirmierController {
  constructor(private readonly infirmierService: InfirmierService) {}

  @Get()
  findAll() {
    return this.infirmierService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.infirmierService.findOne(parseInt(id));
  }

  @Post()
  create(@Body() dto: CreateInfirmierDto) {
    return this.infirmierService.create(dto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateInfirmierDto) {
    return this.infirmierService.update(parseInt(id), dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.infirmierService.delete(parseInt(id));
  }
}
