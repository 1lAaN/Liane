import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateInfirmierDto } from './dto/create-infirmier.dto';
import { UpdateInfirmierDto } from './dto/update-infirmier.dto';

@Injectable()
export class InfirmierService {
  constructor(private readonly prisma: PrismaService) {}
  findAll() {
    return this.prisma.infirmier.findMany();
  }
  findOne(id: number) {
    return this.prisma.infirmier.findUnique({ where: { id } });
  }
  create(dto: CreateInfirmierDto) {
    return this.prisma.infirmier.create({ data: dto });
  }
  update(id: number, dto: UpdateInfirmierDto) {
    return this.prisma.infirmier.update({ where: { id }, data: dto });
  }
  delete(id: number) {
    return this.prisma.infirmier.delete({ where: { id } });
  }
}
