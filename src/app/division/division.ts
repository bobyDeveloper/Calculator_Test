export function division(oper1: number, oper2: number): number {
    if (oper2 === 0) {
        throw new Error("Cannot divide by zero");
    }
    return oper1 / oper2;
}