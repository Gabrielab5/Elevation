const {validate} = require('./TDD')

describe("Validate test ", () =>{

    test("should receive an array of booleans", () => {
        expect(validate([])).toEqual({ error: "Need at least one boolean" })
    })

    test("should return an error object if array contains no booleans", () => {
        expect(validate([2,'h', null])).toEqual({ error: "Need at least one boolean" })
    })

       test("should return true if more trues than falses", () => {
        expect(validate([true, true, false])).toBe(true)
    })

    test("should return false if more falses than trues", () => {
        expect(validate([false, false, true])).toBe(false)
    })

    test("should return false if equal number of trues and falses", () => {
        expect(validate([true, false])).toBe(false)
    })

    test("should ignore non-boolean values", () => {
        expect(validate([true, false, "hello", 0, undefined])).toBe(false)
    })

    test("should return true if all values are true", () => {
        expect(validate([true, true, true])).toBe(true)
    })

    test("should return false if all values are false", () => {
        expect(validate([false, false, false])).toBe(false);
    })
})