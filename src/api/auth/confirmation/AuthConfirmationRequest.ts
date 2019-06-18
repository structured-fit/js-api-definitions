import { IsString, Length, IsDefined } from "class-validator";

export class AuthConfirmationRequest {

    @IsDefined()
    @IsString()
    @Length(2, 128)
    readonly request: string;

    @IsDefined()
    @IsString()
    @Length(2, 128)
    readonly code: string;

}
