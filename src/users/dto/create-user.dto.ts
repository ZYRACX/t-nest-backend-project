import { IsEmail, IsNotEmpty, IsString, IsUUID, MinLength } from "class-validator";

export class CreateUserDto {

    @IsUUID()
    @IsNotEmpty()
    uuid: string

    @IsString()
    @IsNotEmpty()
    username: string


}
