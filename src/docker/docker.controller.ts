import { Controller, Get, Query, Request } from "@nestjs/common";
import { Auth } from "src/auth/decorators/auth.decorator";
import { Role } from "src/common/enums/rol.enum";
import { RequestWithUser } from "src/auth/interface/req.interface";
import { DocSearchDto, DockerHubGetDto } from "./dto/docker.dto";
import { DockerService } from "./docker.service";

@Auth(Role.USER)
@Controller('docker')
export class DockerController {

    constructor(private readonly DockerService: DockerService){}

    @Get('search')
    async search(@Query() DocSearchDto: DocSearchDto, @Request() req: RequestWithUser) {
        const email = req.user.email;
        return this.DockerService.searchDockerHub(DocSearchDto, { email });
    }

    @Get('find')
    async find(@Query() DockerHubGetDto: DockerHubGetDto) {
        return this.DockerService.getDockerHubById(DockerHubGetDto);
    }
}