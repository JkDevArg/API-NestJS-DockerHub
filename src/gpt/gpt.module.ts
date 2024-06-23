import { Module } from '@nestjs/common';
import { GptService } from './gpt.service';
import { GptController } from './gpt.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chat } from './entities/gpt.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Chat])],
  controllers: [GptController],
  providers: [GptService],
  exports: [TypeOrmModule, GptService]
})
export class GptModule {}
