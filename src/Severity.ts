import { IsNumber, IsString } from "class-validator";

export class Severity {

    public static readonly FATAL = new Severity(60, "fatal", "fatal error");

    public static readonly ERROR = new Severity(50, "error", "error");

    public static readonly WARN = new Severity(40, "warn", "warning");

    public static readonly INFO = new Severity(30, "info", "info");

    public static readonly DEBUG = new Severity(20, "debug", "debug message");

    public static readonly TRACE = new Severity(10, "trace", "trace");

    @IsNumber()
    private readonly id: number;

    @IsString()
    private readonly name: string;

    @IsString()
    private readonly title: string;

    constructor(
        id: number,
        name: string,
        title: string) {
            this.id = id;
            this.name = name;
            this.title = title;
    }

    public getId(): number {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getTitle(): string {
        return this.title;
    }

    public equals(severity: Severity): boolean {
        return this.id === severity.getId();
    }

}
