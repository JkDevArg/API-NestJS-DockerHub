import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DockerHub } from './entities/docker.entity';
import { DockerController } from './docker.controller';
import { DockerService } from './docker.service';
import { GptModule } from 'src/gpt/gpt.module';
import { GptService } from 'src/gpt/gpt.service';

@Module({
    imports: [TypeOrmModule.forFeature([DockerHub]), GptModule],
    controllers: [DockerController],
    providers: [DockerService, GptService],
})

export class DockerModule {}