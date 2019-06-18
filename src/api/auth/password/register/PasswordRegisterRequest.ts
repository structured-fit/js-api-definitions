import { IsString, IsEmail, Length, IsDefined } from "class-validator";

export class PasswordRegisterRequest {

    @IsDefined()
    @IsEmail()
    readonly email: string;

    @IsDefined()
    @IsString()
    @Length(2, 128)
    readonly password: string;

    @IsDefined()
    @IsString()
    @Length(2, 128)
    readonly name: string;

}
