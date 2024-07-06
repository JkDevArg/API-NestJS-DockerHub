import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginIzipay } from './entities/izipay.entity';
import { IzipayController } from './izipay.controller';
import { IzipayService } from './izipay.service';

@Module({
    imports: [TypeOrmModule.forFeature([LoginIzipay])],
    controllers: [IzipayController],
    providers: [IzipayService]
})

export class IzipayModule {}
