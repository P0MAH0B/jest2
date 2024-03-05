const { TestScheduler } = require("jest");
const addition = require("../calc");

describe("Calculator", () => {
    describe("Addition function", () => {
        test("should return 42 for 20 + 22", () => {
            expect(addition(20,22)).toBe(42);
        });
        test("should return 80 for 40 + 40", () => {
            expect(addition(40,40)).toBe(80);
        });
    });
    describe("Subtraction function", () => {
         

    });
    describe("Multiply function", () => {

    });
    describe("Division function", () => {

    });


});