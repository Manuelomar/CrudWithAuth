
import {
  IsInt,
  IsOptional,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';

export class UpdateCatDto {
  @IsString()
  @IsOptional()
  @MinLength(1)
  name: string;
  @IsInt()
  @IsPositive()
  @IsOptional()
  age: number;
  @IsString()
  @IsOptional()
  breed?: string;
}
