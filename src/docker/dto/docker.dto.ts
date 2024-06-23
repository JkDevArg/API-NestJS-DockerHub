import { Transform } from "class-transformer";
import { IsBoolean, IsNumber, IsOptional, IsString } from "class-validator";

export class DocSearchDto {
    @IsString()
    query: string;

    @IsNumber()
    @IsOptional()
    from: number;

    @IsNumber()
    @IsOptional()
    size: number;
}

export class DockerHubGetDto {
    @IsString()
    id: string;

    @IsBoolean()
    @IsOptional()
    @Transform(({ value }) => value === 'true' || value === true)
    execute?: boolean;
}