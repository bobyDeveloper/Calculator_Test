import { power } from './power';

describe('power unit tests', () => {
    it('should raise 2 to the power of 3 to equal 8', () => {
        expect(power(2, 3)).toBe(8);
    });

    it('should raise 5 to the power of 0 to equal 1', () => {
        expect(power(5, 0)).toBe(1);
    });

    it('should raise 10 to the power of -1 to equal 0.1', () => {
        expect(power(10, -1)).toBeCloseTo(0.1);
    });
});