import { multiplication } from './multiplication';

describe('multiplication unit tests', () => {
    it('should multiply 3 * 5 to equal 15', () => {
        expect(multiplication(3, 5)).toBe(15);
    });

    it('should multiply -1 * 5 to equal -5', () => {
        expect(multiplication(-1, 5)).toBe(-5);
    });

    it('should multiply 0 * 10 to equal 0', () => {
        expect(multiplication(0, 10)).toBe(0);
    });
});