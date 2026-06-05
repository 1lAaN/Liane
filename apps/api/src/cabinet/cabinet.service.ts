import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateCabinetDto } from './dto/create-cabinet.dto';
import { UpdateCabinetDto } from './dto/update-cabinet.dto';

@Injectable()
export class CabinetService {
  constructor(private readonly prisma: PrismaService) {}
  findAll() {
    return this.prisma.cabinet.findMany();
  }
  findOne(id: number) {
    return this.prisma.cabinet.findUnique({ where: { id } });
  }
  create(dto: CreateCabinetDto) {
    return this.prisma.cabinet.create({ data: dto });
  }
  update(id: number, dto: UpdateCabinetDto) {
    return this.prisma.cabinet.update({ where: { id }, data: dto });
  }

  delete(id: number) {
    return this.prisma.cabinet.delete({ where: { id } });
  }
}
