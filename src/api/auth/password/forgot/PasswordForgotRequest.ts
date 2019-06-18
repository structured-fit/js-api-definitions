import { IsString, IsEmail, Length, IsDefined } from "class-validator";

export class PasswordForgotRequest {

    @IsDefined()
    @IsEmail()
    readonly email: string;

    @IsDefined()
    @IsString()
    @Length(2, 128)
    readonly password: string;

}
