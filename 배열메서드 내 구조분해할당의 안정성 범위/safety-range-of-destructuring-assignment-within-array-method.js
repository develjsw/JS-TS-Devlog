
// 아래는 배열 메서드인 some()을 통해 배열을 순회하면서,
// 구조 분해 할당을 사용해 memberId 값이 2인 항목이 존재하는지 확인하는 예제입니다.

// [1번]
// 첫 번째 요소는 객체지만 memberId가 없으므로 undefined
// 두 번째 요소에서 memberId === 2 조건이 만족되어 true 반환
const arrWithObject1 = [{"userId": 1}, {"memberId": 2}, 1000, true, "문자열"];
arrWithObject1.some(({ memberId }) => memberId === 2);


// [2번]
// 앞의 숫자, boolean, 문자열은 구조 분해 대상이 아니지만 내부적으로 Object 래핑되므로 에러 없이 통과 (memberId는 모두 undefined)
// 마지막에서 { memberId: 2 }를 만나 조건 만족 → true 반환
const arrWithObject2 = [1000, true, "문자열", {"userId": 1}, {"memberId": 2}];
arrWithObject2.some(({ memberId }) => memberId === 2);


// [3번]
// 첫 번째 요소가 null → 구조 분해 불가 → TypeError 발생
const arrWithObject3 = [null, 1000, true, "문자열", {"userId": 1}, {"memberId": 2}];
arrWithObject3.some(({ memberId }) => memberId === 2);


// [4번]
// 첫 번째 요소가 undefined → 구조 분해 불가 → TypeError 발생
const arrWithObject4 = [undefined, {"userId": 1}, {"memberId": 2}, 1000, true, "문자열"];
arrWithObject4.some(({ memberId }) => memberId === 2);


// [5번]
// 앞에 조건을 만족하는 객체({ memberId: 2 })가 먼저 나오기 때문에
// 이후 null 값 부터는 순회하지 않음 → 에러 없이 true 반환
const arrWithObject5 = [{"userId": 1}, {"memberId": 2}, null, undefined, 1000, true, "문자열"];
arrWithObject5.some(({ memberId }) => memberId === 2);


// [6번]
// null, undefined를 먼저 필터링한 후 구조 분해를 수행하므로 안전하게 동작함 → true 반환
const arrWithObject6 = [undefined, null, {"userId": 1}, {"memberId": 2}, 1000, true, "문자열"];
arrWithObject6.filter((item) => ![undefined, null].includes(item)).some(({ memberId }) => memberId === 2);

/*
    배열 메서드 내에서 구조 분해 할당을 사용할 때 주의할 점은,
    요소에 null 또는 undefined가 포함되어 있는지 확인하는 것입니다.

    object, number, boolean, string 값들은 내부적으로 Object로 래핑되기 때문에
    구조 분해가 가능하며 에러 없이 undefined 값이 할당됩니다.

    EX)
        const numberTarget = 1000;
        const booleanTarget = true;
        const stringTarget = "문자열";
        const undefinedTarget = undefined;
        const nullTarget = null;

        const { newVariable1 } = numberTarget; // undefined 값으로 저장됨
        const { newVariable2 } = booleanTarget; // undefined 값으로 저장됨
        const { newVariable3 } = stringTarget; // undefined 값으로 저장됨
        const { newVariable4 } = undefinedTarget; // ❌ TypeError 발생
        const { newVariable5 } = nullTarget; // ❌ TypeError 발생
*/