import { PrismaModule } from '../prisma.module';
import { InfirmierController } from './infirmier.controller';
import { InfirmierService } from './infirmier.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [PrismaModule],
  controllers: [InfirmierController],
  providers: [InfirmierService],
})
export class InfirmierModule {}
