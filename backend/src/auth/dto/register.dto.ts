import {
    IsString,
    IsNotEmpty,
    IsEmail,
    MinLength,
    MaxLength,
    IsDateString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

/**
 * RegisterDto — DTO para la petición POST /auth/register.
 * Mapea los campos del formulario de registro del frontend.
 */
export class RegisterDto {
    @ApiProperty({ example: 'John Doe', description: 'Nombre completo del usuario' })
    @IsString()
    @IsNotEmpty({ message: 'El nombre es requerido' })
    @MaxLength(100)
    fullName: string;

    @ApiProperty({ example: 'johndoe@gmail.com', description: 'Correo electrónico único' })
    @IsEmail({}, { message: 'El correo electrónico no es válido' })
    @IsNotEmpty({ message: 'El correo es requerido' })
    username: string;

    @ApiProperty({ example: '1234567890', description: 'Número de identificación' })
    @IsString()
    @IsNotEmpty({ message: 'La identificación es requerida' })
    @MaxLength(20)
    identification: string;

    @ApiProperty({ example: '2000-08-17', description: 'Fecha de nacimiento (ISO 8601)' })
    @IsDateString({}, { message: 'La fecha de nacimiento no es válida' })
    @IsNotEmpty({ message: 'La fecha de nacimiento es requerida' })
    birthDate: string;

    @ApiProperty({ example: 'Admin123!', description: 'Contraseña (mínimo 6 caracteres)' })
    @IsString()
    @IsNotEmpty({ message: 'La contraseña es requerida' })
    @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
    password: string;
}
