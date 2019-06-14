import { IsDefined, IsString, Matches } from "class-validator";

export class PasswordLoginResponse {

    @IsDefined()
    @IsString()
    @Matches(/^[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)?$/)
    jwt: string;

}
