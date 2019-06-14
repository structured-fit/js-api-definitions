import "reflect-metadata"; // https://github.com/19majkel94/class-transformer-validator/issues/20
import test from "ava";
import { transformAndValidate } from "class-transformer-validator";
import { ErrorResponse } from "../../src/ErrorResponse";
import { Severity } from "../../src/Severity";

test("valid error response", async t => {
    const response = await transformAndValidate(ErrorResponse, {
        id: "1",
        severity: Severity.DEBUG,
        title: "Internal Server Error",
        message: "Something bad happened.",
        supportPortal: "http://support.structured.fit/",
    });
    t.is(response.id, "1");
});

test("only requires severity and title", async t => {
    const response = await transformAndValidate(ErrorResponse, {
        severity: Severity.DEBUG,
        title: "Internal Server Error",
    });
    t.true(response.severity.equals(Severity.DEBUG));
});

test("requires severity", async t => {
    t.plan(2);
    await transformAndValidate(ErrorResponse, {
            title: "Internal Server Error",
        })
        .then(() => t.fail())
        .catch(e => {
            t.true(Array.isArray(e));
            t.is(e.length, 1);
            return Promise.resolve();
        });
});

test("requires title", async t => {
    t.plan(2);
    await transformAndValidate(ErrorResponse, {
            severity: Severity.DEBUG,
        })
        .then(() => t.fail())
        .catch(e => {
            t.true(Array.isArray(e));
            t.is(e.length, 1);
            return Promise.resolve();
        });
});

test("expanded severity", async t => {
    const response = await transformAndValidate(ErrorResponse, {
        severity: {
            id: Severity.DEBUG.getId(),
            name: Severity.DEBUG.getName(),
            title: Severity.DEBUG.getTitle(),
        },
        title: "Internal Server Error",
    });
    t.is(response.severity.getId(), Severity.DEBUG.getId());
});