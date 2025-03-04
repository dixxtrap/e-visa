import { applyDecorators } from '@nestjs/common/decorators/core/apply-decorators';
import { ApiPropertyOptions } from '@nestjs/swagger/dist/decorators/api-property.decorator';
import { IsBoolean, IsOptional, ValidationOptions } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
type Option = {
  apiPropertyOptions?: ApiPropertyOptions;

  validationOptions?: ValidationOptions;
};
export const IsValidBooleanApi = (option?: Option) => {
  return applyDecorators(
    IsBoolean(option?.validationOptions),
    ApiProperty(option?.apiPropertyOptions),
  );
};

export const IsValidBooleanOptionalApi = (option?: Option) => {
  return applyDecorators(IsValidBooleanApi(option), IsOptional());
};
