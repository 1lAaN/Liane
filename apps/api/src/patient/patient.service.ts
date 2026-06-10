import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';

@Injectable()
export class PatientService {
  constructor(private readonly prisma: PrismaService) {}
  findAll() {
    return this.prisma.patient.findMany();
  }
  findOne(id: number) {
    return this.prisma.patient.findUnique({ where: { id } });
  }
  create(dto: CreatePatientDto) {
    return this.prisma.patient.create({ data: dto });
  }
  update(id: number, dto: UpdatePatientDto) {
    return this.prisma.patient.update({ where: { id }, data: dto });
  }
  delete(id: number) {
    return this.prisma.patient.delete({ where: { id } });
  }
}
