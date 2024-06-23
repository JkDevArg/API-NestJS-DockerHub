import { BadRequestException, Injectable } from '@nestjs/common';
import axios from 'axios';
import { axiosErrorHandler } from 'src/common/utils/http-resp.utils';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DockerHub } from './entities/docker.entity';
import { DocSearchDto, DockerHubGetDto } from './dto/docker.dto';
import { GptService } from 'src/gpt/gpt.service';
import { createDockerCompose } from 'src/utils/createDockerCompose';
import { runDockerCompose } from 'src/utils/executeDockerCompose';

@Injectable()
export class DockerService {
    private readonly URL_SEARCH = 'https://hub.docker.com/api/search/v3/';
    private readonly URL_FIND = 'https://hub.docker.com/v2/repositories';

    constructor(
        @InjectRepository(DockerHub)
        private readonly dockerRepository: Repository<DockerHub>,
        private readonly gptService: GptService,
    ) { }

    async searchDockerHub(DockerSearch: DocSearchDto, { email }: { email: string }){
        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }

        const data = {
            query: DockerSearch.query,
            from: DockerSearch.from ?? 0,
            size: DockerSearch.size ?? 10
        }

        const axiosPromise = axios.get(`${this.URL_SEARCH}/catalog/search?query=${data.query}&from=${data.from}&size=${data.size}`, { headers });
        const resp = await axiosErrorHandler(axiosPromise);

        if(resp.total == 0) throw new BadRequestException('No hay elementos para mostrar');

        const dataSave = {
            'request': `${this.URL_SEARCH}/catalog/search?query=${data.query}&from=${data.from}&size=${data.size}`,
            'response': `${resp.total} results`,
            'userEmail': email
        }
        // guardams los datos
        this.dockerRepository.save(dataSave);

        return resp;
    }

    async getDockerHubById(DockerHubGetDto: DockerHubGetDto): Promise<any> {
        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        };

        const axiosPromise = axios.get(`${this.URL_FIND}/${DockerHubGetDto.id}/`, { headers });
        const resp = await axiosErrorHandler(axiosPromise);

        if (!resp.status) throw new BadRequestException('No hay elementos para mostrar');

        const getDocker = await this.gptService.getCompretion(DockerHubGetDto.id);
        const respDocker = await createDockerCompose(DockerHubGetDto.id, getDocker);

        if (DockerHubGetDto.execute) {
            try {
                const dockerComposeResult = await runDockerCompose(respDocker);
                return {
                    'request': `${this.URL_FIND}/${DockerHubGetDto.id}/`,
                    'response': resp,
                    'docker-compose.yml': getDocker,
                    'command': `docker pull ${DockerHubGetDto.id}`,
                    'docker-compose': true,
                    'docker-compose-output': dockerComposeResult,
                };
            } catch (error) {
                throw new BadRequestException(`Docker Compose execution failed: ${error.message}`);
            }
        }

        return {
            'request': `${this.URL_FIND}/${DockerHubGetDto.id}/`,
            'response': resp,
            'docker-compose.yml': getDocker,
            'command': `docker pull ${DockerHubGetDto.id}`,
            'docker-compose': false,
        };
    }
}