import { IsEmail, Length } from "class-validator";

export class PasswordLoginRequest {

    @IsEmail()
    readonly email: string;

    @Length(2, 128)
    readonly password: string;

}
