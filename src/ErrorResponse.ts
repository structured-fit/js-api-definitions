import { IsUrl, MaxLength, MinLength, ValidateNested, IsString, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { Severity } from "./Severity";
import { IsDefined } from "class-validator";

/**
 * The server response when an error occurs.
 */
export class ErrorResponse {

    /**
     * An event ID that can be used internally to locate this error in logs.
     * Should be included in error reports.
     */
    @IsOptional()
    @IsString()
    public readonly id?: string;

    /**
     * The severity of the error.
     */
    @IsDefined()
    @ValidateNested()
    @Type(() => Severity)
    public readonly severity: Severity;

    /**
     * A description of the problem.  May just be 'Internal Server Error'.
     */
    @MinLength(2, {
        message: "Title is too short.  Must be $constraint1 characters, but was only $value",
    })
    @MaxLength(64, {
        message: "Title is too long.  Can only be $constraint1 characters, but was $value",
    })
    public readonly title: string;

    /**
     * An optional description of the problem.
     */
    @IsOptional()
    @MaxLength(256, {
        message: "Message can't be more than $constraint1 characters, but was $value",
    })
    public readonly message?: string;

    /**
     * A URL to the relevant support portal for this error.
     */
    @IsOptional()
    @IsUrl({}, {
        message: "Support portal link must be a valid URL.",
    })
    public readonly supportPortal?: string;

}
