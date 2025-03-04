import { ApiProperty } from "@nestjs/swagger/dist/decorators/api-property.decorator";
import { Allow } from "class-validator";

export class FileUploadDto {
    @ApiProperty({ type: 'string', format: 'binary' })
    @Allow()
    file: any;
  }
