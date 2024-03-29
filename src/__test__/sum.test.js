import sum from "../utils/sum"

test('Sum function should calculate the sum of two numbers', () => {
    const result = sum(0,1)

    // Assertion
    expect(result).toBe(1)
})