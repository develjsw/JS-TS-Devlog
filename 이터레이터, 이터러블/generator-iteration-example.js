
// 다양한 방식으로 제너레이터 이터레이터를 순회하는 예제

function* myMap(fn, iterable) {
    for (const value of iterable) {
        yield fn(value);
    }
}

const arr = [1, 2, 3];

// 제너레이터 함수는 호출 시 바로 실행되지 않고, 이터레이터 객체를 반환함 (Lazy Evaluation)
const mapped = myMap(num => num * 2, arr);
const mapped2 = myMap(num => num * 2, arr);
const mapped3 = myMap(num => num * 2, arr);
const mapped4 = myMap(num => num * 2, arr);


// mapped는 이터레이터 객체이며, 아직 순회가 시작되지 않았음
console.log(mapped);  // 출력: Object [Generator] {}
console.log(mapped2); // 출력: Object [Generator] {}
console.log(mapped3); // 출력: Object [Generator] {}
console.log(mapped4); // 출력: Object [Generator] {}


// 1. 전개 연산자(...)는 내부적으로 for...of 문을 사용하여 이터레이터를 순회함
//    순회 과정에서 이터레이터 프로토콜에 따라 next()가 자동 호출되고,
//    제너레이터 함수의 코드가 실행되며 yield된 값들이 배열에 담김
console.log([...mapped]); // 출력: [2, 4, 6]


// 2. for...of 문을 사용한 순회
//    마찬가지로 이터레이터 프로토콜에 따라 next()가 내부적으로 호출됨
for (const value of mapped2) {
    console.log(value); // 출력: 2, 4, 6
}


// 3. Array.from()을 사용하여 이터레이터를 배열로 변환
//    내부적으로 for...of 문과 동일하게 동작함 (next() 자동 호출)
console.log(Array.from(mapped3)); // 출력: [2, 4, 6]


// 4. next() 메서드를 직접 호출하여 수동으로 순회
//    제너레이터의 실행 흐름을 명확하게 확인할 수 있는 방식
let result = mapped4.next();
while (!result.done) {
    console.log(result.value); // 출력: 2, 4, 6
    result = mapped4.next();
}
