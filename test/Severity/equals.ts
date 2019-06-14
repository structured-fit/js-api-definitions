import test from "ava";
import { Severity } from "../../src/Severity";

test("matches severities", t => {
    t.true(Severity.DEBUG.equals(Severity.DEBUG));
});

test("rejects different severities", t => {
    t.false(Severity.ERROR.equals(Severity.DEBUG));
});

test("matches constructed severities", t => {
    const severity = new Severity(
        Severity.INFO.getId(),
        Severity.INFO.getName(),
        Severity.INFO.getTitle(),
    );
    t.true(severity.equals(Severity.INFO));
});

test("matches based on ID", t => {
    const severity = new Severity(
        Severity.INFO.getId(),
        Severity.INFO.getName() + "other",
        Severity.INFO.getTitle() + "other",
    );
    t.true(severity.equals(Severity.INFO));
});

test("only matches on ID", t => {
    const severity = new Severity(
        Severity.INFO.getId() + 1,
        Severity.INFO.getName(),
        Severity.INFO.getTitle(),
    );
    t.false(severity.equals(Severity.INFO));
});
