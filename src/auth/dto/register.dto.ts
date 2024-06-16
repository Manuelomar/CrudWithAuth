import { IsEmail, IsString, MinLength, min } from "class-validator";
import { Transform } from "class-transformer";

export class ResgisterDto{
    @Transform(({ value }) => value.trim())
    @IsString()
    @MinLength(1)
    name: string;

    @IsEmail()
    email: string;

    @Transform(({ value }) => value.trim())
    @IsString()
    @MinLength(6)
    password: string;
}