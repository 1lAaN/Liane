import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma.module';
import { CabinetModule } from './cabinet/cabinet.module';

@Module({
  imports: [PrismaModule, CabinetModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
