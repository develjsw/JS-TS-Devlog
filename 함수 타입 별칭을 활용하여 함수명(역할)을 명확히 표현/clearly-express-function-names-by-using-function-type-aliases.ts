// 아래처럼 함수명이 calculate 등으로 모호한 경우,
// 함수 타입 별칭을 사용하여 역할을 명확하게 표현할 수 있으며,
// 코드의 가독성과 유지보수성을 높이는 데 도움이 됨

enum MathSymbolEnum {
    PLUS = '+',
    MINUS = '-',
    MULTIPLY = '*',
    DIVIDE = '/'
}

// 함수 타입 별칭 정의
type AccumulatedCalculate = (mathSymbol: MathSymbolEnum, ...args: number[]) => number;

// 함수 타입 별칭을 사용하여 - 의미 있는 타입 이름으로 함수의 역할을 명확히 표현
const calculate: AccumulatedCalculate = (mathSymbol: MathSymbolEnum, ...args: number[]) => {
    if (args.length === 0) return 0;

    return args.reduce((acc, cur) => {
        switch (mathSymbol) {
            case MathSymbolEnum.DIVIDE : return acc / cur;
            case MathSymbolEnum.MULTIPLY : return acc * cur;
            case MathSymbolEnum.PLUS : return acc + cur;
            case MathSymbolEnum.MINUS : return acc - cur;
        }
    })
}

const divideRes1 = calculate(MathSymbolEnum.DIVIDE,4, 2, 2); // 1
const multiplyRes1 = calculate(MathSymbolEnum.MULTIPLY,2, 10, 3); // 60
const plusRes1 = calculate(MathSymbolEnum.PLUS,1, 2, 3); // 6

console.log(divideRes1);
console.log(multiplyRes1);
console.log(plusRes1);