
// [ 제너레이터 함수를 활용한 filter 함수 구현 ]

// 1. for...of 사용하여 filter 함수 구현
function* filter1(fn, iterable) {
    for (const value of iterable) {
        if (fn(value)) {
            yield value;
        }
    }
}
// 구현된 함수 사용
const array1 = [1, 2, 3, 4, 5];
const filtered1 = filter1(num => num % 2 === 0, array1);
const filterArr1 = [...filtered1]; // 결과 : [2, 4]


// 2. while + iterator.next() 사용하여 filter 함수 구현 - 직접 구현에 가까움
function* filter2(fn, iterable) {
    const iterator = iterable[Symbol.iterator]();

    while (true) {
        const { value, done } = iterator.next();
        if (done) break;

        if (fn(value)) {
            yield value;
        }
    }
}
// 구현된 함수 사용
const array2 = [1, 2, 3, 4, 5];
const filtered2 = filter2(num => num % 2 === 0, array2);
const filterArr2 = [...filtered2]; // 결과 : [2, 4]



// [ 제너레이터 함수를 활용한 map 함수 구현 ]
// 1. for...of 사용하여 map 함수 구현
function* map1(fn, iterable) {
    for (const value of iterable) {
        yield fn(value);
    }
}
// 구현된 함수 사용
const array3 = [1, 2, 3, 4, 5];
const mapped1 = map1(num => num * 2, array3);
const mapArr1 = [...mapped1]; // 결과 : [2, 4, 6, 8, 10]


// 2. while + iterator.next() 사용하여 map 함수 구현 - 직접 구현에 가까움
function* map2(fn, iterable) {
    const iterator = iterable[Symbol.iterator]();

    while (true) {
        const { value, done } = iterator.next();
        if (done) break;

        yield fn(value);
    }
}
// 구현된 함수 사용
const array4 = [1, 2, 3, 4, 5];
const mapped2 = map2(num => num * 2, array4);
const mapArr2 = [...mapped2]; // 결과 : [2, 4, 6, 8, 10]