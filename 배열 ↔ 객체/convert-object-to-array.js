// Object.entries(객체) : 객체 → 배열 변환하여 반환
// Object.entries(배열) : 배열 → 배열 반환

// 각 key-value 쌍이 [key, value] 형태의 배열로 변환됨
Object.entries({ a:1, b:2, c:3, d:4 }); // [[a, 1], [b, 2], [c, 3], [d, 4]]

// 중복된 key 가 있는 경우, 마지막에 할당된 값만 반영됨
Object.entries({ a:1, a:2, b:3, a:4 }); // [[a, 4], [b, 3]]

// 배열을 넣으면, 인덱스가 문자열로 key로 사용되고 요소가 value가 됨
Object.entries(['a', 'b']); // [['0', 'a'], ['1', 'b']]

// 빈 배열을 넣으면 빈 배열 반환
Object.entries([]); // []