// Object.fromEntries(배열) : 배열 → 객체 변환하여 반환

// 각 [key, value] 쌍을 객체의 속성으로 변환
Object.fromEntries([['a', 1], ['b', 2], ['c', 3], ['d', 4]]); // { a:1, b:2, c:3, d:4 }

// 중복된 key 가 있는 경우, 마지막에 등장한 값으로 덮어씀
Object.fromEntries([['a', 1], ['a', 2], ['b', 3], ['a', 4]]); // { a:4, b:3 }

// 각 요소는 반드시 [key, value] 형식이어야 하며, 그렇지 않으면 에러 발생
// Object.fromEntries(['a', 1, 'b', 2, 'c', 3]); // TypeError

// 첫 두 요소만 사용
Object.fromEntries([['a', 1, 'b', 2, 'c', 3]]); // {a:1}

// 빈 배열을 넣으면 빈 객체 반환
Object.fromEntries([]); // {}