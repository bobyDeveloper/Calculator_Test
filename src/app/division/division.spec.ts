import { division } from './division';

describe('division unit tests', () => {
    it('should divide 10 / 2 to equal 5', () => {
        expect(division(10, 2)).toBe(5);
    });

    it('should divide -10 / 2 to equal -5', () => {
        expect(division(-10, 2)).toBe(-5);
    });

    it('should throw an error for division by zero', () => {
        expect(() => { division(10, 0) }).toThrowError("Cannot divide by zero");
    });
});