### iterable ( 이터러블 )
- 정의
  - 반복이 가능한 객체
  - for...of, 스프레드 연산자(...), Array.from() 등에서 사용할 수 있는 객체
  - Symbol.iterator 메서드를 가지고 있어야 함
  - 이 메서드는 호출 시 iterator 객체를 반환함


- 대표 예시
  - Array
  - String
  - Map, Set
  - arguments 객체
  - 사용자 정의 이터러블 등


- 예시 코드
  ```ts
  const arr = [10, 20, 30];
  const iter = arr[Symbol.iterator]();  // 이터러블의 Symbol.iterator 호출

  console.log(typeof iter.next); // 'function', 이터레이터 반환됨
  
  console.log(iter.next()); // { value: 10, done: false } → 첫 번째 값 반환
  console.log(iter.next()); // { value: 20, done: false } → 두 번째 값 반환
  console.log(iter.next()); // { value: 30, done: false } → 세 번째 값 반환
  console.log(iter.next()); // { value: undefined, done: true } → 네 번째 값 반환
  ```

### iterator ( 이터레이터 )
- 정의
  - 값을 순서대로 꺼낼 수 있는 객체
  - .next() 메서드를 가지고 있음
  - next()를 호출하면 {value: any, done: boolean} 형태의 결과 반환
    - value : 현재 값
    - done : 반복이 끝났는지 여부 (true면 끝)


- 직접만든 이터레이터 예시
  ```ts
  function createIterator() {
      let count = 0;
  
      return {
          next() {
              if (count < 3) {
                  return { value: count++, done: false };
              } else {
                  return { value: undefined, done: true };
              }
          }
      };
  }
    
  const iterator = createIterator();
  console.log(iterator.next()); // { value: 0, done: false }
  console.log(iterator.next()); // { value: 1, done: false }
  console.log(iterator.next()); // { value: 2, done: false }
  console.log(iterator.next()); // { value: undefined, done: true }
  ```

### 정리 비교
| 구분               | 역할/정의                                | 핵심 메서드            | 예시                               |
|------------------|---------------------------------------|---------------------|----------------------------------|
| 이터러블 (Iterable) | 이터레이터를 반환할 수 있는 객체              | `[Symbol.iterator]()` | Array, Set, String, Map 등      |
| 이터레이터 (Iterator) | `next()`를 통해 값을 순서대로 반환하는 객체 | `next()`             | `arr[Symbol.iterator]()` 결과 등 |


### 간단한 비유
| 비유 대상  | 설명             |
|---------|----------------|
| 이터러블   | 책              |
| 이터레이터 | 책을 읽는 사람      |
| `next()`  | 다음 페이지로 넘기기 |
