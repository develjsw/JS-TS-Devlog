### 함수 오버로드 ( Function Overloading )

- 함수 오버로드는 **JavaScript에서는 지원되지 않으며**, **TypeScript에서만** 사용할 수 있음

#### 정의 :
- 동일한 이름의 함수에 대해 다양한 매개변수 타입 또는 개수를 허용하는 방식임
- 입력 타입에 따라 **다른 반환 타입 또는 로직을 구현**할 수 있음

#### 구성요소 :
1. `오버로드 시그니처 ( Overload Signatures )`
    ```ts
    EX)
   
    function double(variable: number): number;
    function double(variable: string): string; 
    ```
   - **호출 시 사용할 수 있는 함수의 타입을 정의**하는 것
   - **실제 구현은 아니며**, 타입 시스템에만 존재함


2. `구현 시그니처 ( Implementation Signatures )`
    ```ts
    EX)
    
    function double(variable: number | string): number | string {
        // 구현부
        if (typeof variable === 'number') {
            return variable * 2;
        } else {
            return variable + variable;
        }
    }
    ```
   - 실제 함수 구현부
   - 유니언 타입 등으로 **모든 경우를 포함할 수 있어야 하며**, **오버로드 시그니처 뒤에 작성해야함**

#### 오버로드 조건 요약 :
| 조건 | 설명                                                                     |
|------|------------------------------------------------------------------------|
| 동일한 함수명을 사용해야 함 | EX) function double(...) 형태로 여러 번 선언                                 |
| 오버로드 시그니처는 여러 개 가능 | 호출 가능한 형태만 정의 (구현은 아님)                                                           |
| 실제 구현은 1개만 있어야 함 | 유니언 타입 등으로 모든 경우를 처리                                                |
| 구현 시그니처는 마지막에 작성해야 함 | 그렇지 않으면 컴파일 에러 발생                                                      |
| 오버로드된 타입을 정확히 처리해야 함 | typeof, Array.isArray 등 런타임 타입 가드 필요 |

