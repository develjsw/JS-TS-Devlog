
// 숫자, 문자열을 2배로 만들어주는 오버로딩 함수

function double(variable: number): number;
function double(variable: string): string;
function double(variable: number | string): number | string {
    if (typeof variable === 'number') {
        return variable * 2;
    }
    return variable + variable;
}

const helloStr = double('Hello');
console.log(helloStr); // HelloHello

const number10 = double(10);
console.log(number10); // 20