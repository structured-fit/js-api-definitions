import test from "ava";
import { validate } from "class-validator";
import { Severity } from "../../src/Severity";
import { transformAndValidate } from "class-transformer-validator";

test("can validate a built-in severity", async t => {
    const errors = await validate(Severity.DEBUG);
    t.is(errors.length, 0);
});

test("can validate a severity object", async t => {
    const severity = await transformAndValidate(Severity, {
        id: 1,
        name: "myerror",
        title: "A Custom Error",
    });
    t.is(severity.getName(), "myerror");
});

test("requires 'id' field", async t => {
    try {
        const severity = await transformAndValidate(Severity, {
            name: "myerror",
            title: "A Custom Error",
        });
        t.fail();
    } catch (err) {
        t.pass();
    }
});
