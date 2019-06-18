import { IsDefined, IsString } from "class-validator";

export class PasswordRegisterResponse {

    /**
     * The unique ID identifying this password registration request.
     */
    @IsDefined()
    @IsString()
    request: string;

}
