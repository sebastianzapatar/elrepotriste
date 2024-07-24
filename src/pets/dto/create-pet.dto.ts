import { IsString, IsInt,Min,MinLength,IsDateString } from 'class-validator';
export class CreatePetDto {
    @IsString()
    @MinLength(3)
    name: string;
    @IsString()
    @MinLength(3)
    type: string;
    @IsDateString()
    born: Date;
}
