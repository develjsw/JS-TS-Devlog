
// 이터러블과 이터레이터 사용

// Array, String, Map, Set은 이터러블이기 때문에 기본적으로 for...of 문을 사용할 수 있음
// 다만, 직접 next() 메서드를 호출하여 하나씩 값을 꺼내려면 [Symbol.iterator]()를 사용해 이터레이터를 먼저 얻어야 함

// 🔹공통🔹 for...of문 사용
const defaultArr = [1, 2, 3];
const defaultStr = 'hello';
const defaultSet = new Set([10, 20, 30]);
const defaultMap = new Map([['price', 15000], ['tax', 1500]]);

for (const value of defaultArr) {
    console.log(value);
    // 출력: 1
    // 출력: 2
    // 출력: 3
}
for (const char of defaultStr) {
    console.log(char);
    // 출력: h
    // 출력: e
    // 출력: l
    // 출력: l
    // 출력: o
}
for (const value of defaultMap) {
    console.log(value);
    // 출력: [ 'price', 15000 ]
    // 출력: [ 'tax', 1500 ]
}
for (const value of defaultSet) {
    console.log(value);
    // 출력: 10
    // 출력: 20
    // 출력: 30
}


// 🔹1. 배열(Array)의 이터레이터 사용
const arr: number[] = [1, 2, 3];
const arrayIterator1: ArrayIterator<number> = arr[Symbol.iterator]();
const arrayIterator2: ArrayIterator<number> = arr[Symbol.iterator]();

for (const value of arr) {
    console.log(value);
    // 출력: 1
    // 출력: 2
    // 출력: 3
}

for (const value of arrayIterator1) {
    console.log(value);
    // 출력: 1
    // 출력: 2
    // 출력: 3
}

console.log(arrayIterator2.next()); // { value: 1, done: false }
console.log(arrayIterator2.next()); // { value: 2, done: false }
console.log(arrayIterator2.next()); // { value: 3, done: false }
console.log(arrayIterator2.next()); // { value: undefined, done: true }


// 🔹2. 문자열(String)의 이터레이터 사용
const str = 'hello';
const stringIterator1: StringIterator<string> = str[Symbol.iterator]();
const stringIterator2: StringIterator<string> = str[Symbol.iterator]();

for (const char of str) {
    console.log(char);
    // 출력: h
    // 출력: e
    // 출력: l
    // 출력: l
    // 출력: o
}

for (const char of stringIterator1) {
    console.log(char);
    // 출력: h
    // 출력: e
    // 출력: l
    // 출력: l
    // 출력: o
}

console.log(stringIterator2.next()); // { value: 'h', done: false }
console.log(stringIterator2.next()); // { value: 'e', done: false }
console.log(stringIterator2.next()); // { value: 'l', done: false }
console.log(stringIterator2.next()); // { value: 'l', done: false }
console.log(stringIterator2.next()); // { value: 'o', done: false }
console.log(stringIterator2.next()); // { value: undefined, done: true }


// 🔹 3. Map 객체의 이터레이터 사용
const map = new Map([
    ['price', 15000],
    ['tax', 1500],
]);
const mapIterator1: MapIterator<[string, number]> = map[Symbol.iterator]();
const mapIterator2: MapIterator<[string, number]> = map[Symbol.iterator]();

for (const value of map) {
    console.log(value);
    // 출력: [ 'price', 15000 ]
    // 출력: [ 'tax', 1500 ]
}

for (const value of mapIterator1) {
    console.log(value);
    // 출력: [ 'price', 15000 ]
    // 출력: [ 'tax', 1500 ]
}

console.log(mapIterator2.next()); // { value: [ 'price', 15000 ], done: false }
console.log(mapIterator2.next()); // { value: [ 'tax', 1500 ], done: false }
console.log(mapIterator2.next()); // { value: undefined, done: true }


// 🔹 4. Set 객체의 이터레이터 사용
const set = new Set([10, 20, 30]);
const setIterator1: SetIterator<number> = set[Symbol.iterator]();
const setIterator2: SetIterator<number> = set[Symbol.iterator]();

for (const value of set) {
    console.log(value);
    // 출력: 10
    // 출력: 20
    // 출력: 30
}

for (const value of setIterator1) {
    console.log(value);
    // 출력: 10
    // 출력: 20
    // 출력: 30
}

console.log(setIterator2.next()); // { value: 10, done: false }
console.log(setIterator2.next()); // { value: 20, done: false }
console.log(setIterator2.next()); // { value: 30, done: false }
console.log(setIterator2.next()); // { value: undefined, done: true }
