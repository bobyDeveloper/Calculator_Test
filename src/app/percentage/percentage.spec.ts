import { percentage } from './percentage';

describe('percentage unit tests', () => {
    it('should get 10% of 100 to equal 10', () => {
        expect(percentage(100, 10)).toBe(10);
    });

    it('should get 20% of 150 to equal 30', () => {
        expect(percentage(150, 20)).toBe(30);
    });

    it('should get 50% of 50 to equal 25', () => {
        expect(percentage(50, 50)).toBe(25);
    });
});