import { IsString, Length, IsDefined } from "class-validator";

export class AuthConfirmationResponse {

    @IsDefined()
    @IsString()
    @Length(2, 128)
    readonly request: string;

}
