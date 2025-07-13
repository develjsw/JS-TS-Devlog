## 즉시 평가 VS 지연 평가

### 개요

JavaScript의 `map`, `filter`, `forEach` 같은 배열 메서드는 사용이 간편하지만, **즉시 평가(Eager Evaluation)** 를 기반으로 작동합니다. 즉시 평가는 **호출 시 모든 요소를 한꺼번에 처리**하며, **중간 배열을 생성**하기 때문에 메모리 소비와 처리 비용 측면에서 단점 존재

이에 반해, **제너레이터(generator)** 또는 **수동 이터레이터(iterator)** 를 사용하면, 데이터를 **하나씩 필요할 때마다 처리하는 지연 평가(Lazy Evaluation)** 방식이 가능해져 메모리 효율성과 성능 최적화에 유리함

---

### Generator 기반 함수 vs 배열 메서드

| 항목 | 배열 메서드 (`map`, `filter`, `forEach` 등) | 제너레이터 기반 함수                               |
|------|---------------------------------------------|-------------------------------------------|
| **평가 방식** | 즉시 평가 (Eager) | 지연 평가 (Lazy)                              |
| **메모리 사용** | 중간 배열 생성 | 필요할 때 값 하나씩 처리                            |
| **무한 데이터 처리** | 불가능 | 가능                                        |
| **중단 처리** | 불편 (`some`, `every` 등 사용) | 자유롭게 `break` 가능                           |
| **추상화/조합** | 가능 (체이닝) | 더 유연한 조합 가능 (`pipe`, `take`, `flatten` 등) |

---

### 이터러블과 지연 평가의 관계

- 배열은 `Symbol.iterator()`를 구현한 **이터러블(Iterable)** 임. 따라서 `for...of`, `스프레드 연산자` 등에서 순회할 수 있음
- 하지만 `map`, `filter` 같은 **배열 메서드는 지연 평가를 수행하는 함수는 아님**. 즉, 즉시 실행되어 **결과 배열을 반환**함
- **이터러블이라는 특성만으로는 지연 평가가 보장되지 않음**
- **지연 평가**를 위해서는 `next()`로 하나씩 값을 꺼낼 수 있는 **이터레이터(iterator)** 를 수동으로 구현하거나, **제너레이터(generator)** 를 사용해야 함

---

### 예시 - 배열 vs 제너레이터 평가 방식 차이

#### 배열 방식 (즉시 평가)
```ts
const result = [1, 2, 3, 4, 5]
  .filter(n => n % 2 === 1)
  .map(n => n * 10);

for (const val of result) {
    console.log(val); // 10, 30, 50
}
```
- 모든 요소를 즉시 평가하여 중간 배열을 생성하고 최종 결과를 반환
- 중간 데이터가 많을 경우 메모리 사용량 증가

#### 제너레이터 방식 (지연 평가)
```ts
function* naturals(limit: number) {
  for (let i = 1; i <= limit; i++) yield i;
}

function* filter(fn, iterable) {
  for (const value of iterable) {
    if (fn(value)) yield value;
  }
}

function* map(fn, iterable) {
  for (const value of iterable) {
    yield fn(value);
  }
}

const result = map(n => n * 10, filter(n => n % 2 === 1, naturals(5)));
for (const val of result) {
  console.log(val); // 10, 30, 50
}
```
- 각 요소를 순차적으로 처리하며 필요한 시점에만 연산이 발생
- 중간 배열을 생성하지 않아 메모리 효율적


### 이터레이터 직접 구현 vs 제너레이터 사용
#### 이터레이터를 직접 구현한 map
- next() 메서드를 명시적으로 정의해야 하므로 코드가 복잡하고 실수 가능성 높음 
    ```ts
    function mapIterator(fn, iterable) {
        const iterator = iterable[Symbol.iterator]();
        
        return {
            [Symbol.iterator]() { return this; },
            next() {
                const { value, done } = iterator.next();
                return done ? { done: true } : { value: fn(value), done: false };
            }
        };
    }
    ```
#### 제너레이터로 구현한 map
- 훨씬 간결하고 직관적
- 내부적으로 이터러블/이터레이터 프로토콜을 자동 처리
    ```ts
    function* map(fn, iterable) {
        for (const value of iterable) {
            yield fn(value);
        }
    }
    ```

### 결론
- 즉시 평가는 단순하고 빠르게 처리할 수 있지만, 중간 배열 생성과 메모리 낭비, 무한 시퀀스 처리 불가 등 제약이 있음
- 지연 평가는 메모리 효율이 뛰어나고 유연하며, 무한 데이터 스트림, 부분 처리, 중단 처리 등에 적합함
- 이터레이터를 직접 구현하는 것도 가능하지만, 제너레이터를 사용하는 것이 코드가 더 간결하고 안전함
