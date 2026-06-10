import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma.module';
import { CabinetModule } from './cabinet/cabinet.module';
import { InfirmierModule } from './infirmier/infirmier.module';
import { PatientModule } from './patient/patient.module';

@Module({
  imports: [PrismaModule, CabinetModule, InfirmierModule, PatientModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
