import { IsDefined, IsString } from "class-validator";

export class PasswordForgotResponse {

    /**
     * The unique ID identifying this password reset request.
     */
    @IsDefined()
    @IsString()
    request: string;

}
