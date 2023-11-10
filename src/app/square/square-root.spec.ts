import { squareRoot } from "./square-root";

describe('squareRoot unit tests', () => {
    
    it('should compute the square root of 4 to be 2', () => {
        const result = squareRoot(4);
        expect(result).toBe(2);
    });

    it('should compute the square root of 9 to be 3', () => {
        const result = squareRoot(9);
        expect(result).toBe(3);
    });

    it('should throw an error for negative numbers', () => {
        expect(() => { squareRoot(-1) }).toThrowError("Cannot calculate square root of negative number");
    });

});