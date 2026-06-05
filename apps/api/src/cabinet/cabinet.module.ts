import { PrismaModule } from '../prisma.module';
import { CabinetController } from './cabinet.controller';
import { CabinetService } from './cabinet.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [PrismaModule],
  controllers: [CabinetController],
  providers: [CabinetService],
})
export class CabinetModule {}
