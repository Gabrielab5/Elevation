const Ex = require('./Exercises') 
describe("Exercises Class", () => {
    let exercise;

    beforeEach(() => {
        exercise = new Ex();
    });

    describe("isEven", () => {
        test("should return true for even numbers", () => {
            expect(exercise.isEven(2)).toBe(true);
            expect(exercise.isEven(0)).toBe(true);
            expect(exercise.isEven(-4)).toBe(true);
        });

        test("should return false for odd numbers", () => {
            expect(exercise.isEven(1)).toBe(false);
            expect(exercise.isEven(-3)).toBe(false);
        });
    });

    describe("removeAtLeastOne", () => {
        test("should remove at least one element", () => {
            const arr = [1, 2, 3, 4];
            const originalLength = arr.length;
            const result = exercise.removeAtLeastOne(arr);

            expect(result.length).toBeLessThan(originalLength);
            expect(result.length).toBeGreaterThan(0);
            expect(result).toBe(arr); // same reference (in-place)
        });

        test("should not remove all elements", () => {
            const arr = [10, 20, 30, 40, 50];
            const result = exercise.removeAtLeastOne(arr);
            expect(result.length).toBeGreaterThan(0);
        });

        test("should return an array", () => {
            const arr = [9, 8, 7];
            const result = exercise.removeAtLeastOne(arr);
            expect(Array.isArray(result)).toBe(true);
        });
    });

    describe("simplify", () => {
        test("should remove ! # . , and ' from the string", () => {
            const dirty = "Hello! This, is. a test# string'";
            const clean = exercise.simplify(dirty);
            expect(clean).toBe("Hello This is a test string");
        });

        test("should return the same string if no symbols are present", () => {
            const input = "clean string with no punctuation";
            expect(exercise.simplify(input)).toBe(input);
        });

        test("should return empty string if only symbols are given", () => {
            const input = "6tW!#.,'";
            expect(exercise.simplify(input)).toBe("6tW");
        });

        test("should handle empty input", () => {
            expect(exercise.simplify("")).toBe("");
        });
    });
});

