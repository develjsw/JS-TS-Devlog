
// userObject 에서 null 값과 object 타입의 값을 제외한 결과만 포함하는 새로운 객체를 생성

const userObject = {
    name: '홍길동',
    age: 25,
    isActive: true,
    deletedAt: null,
    address: {
        roadAddr: '서울시 00구 00로 123 (00동)', jiBunAddr: '서울시 00구 00동 123-4'
    }
}

// 결과 : { name: '홍길동', age: 25, isActive: true }
const filteredObject = Object.fromEntries(
    Object.entries(userObject)
        .filter(
            ([key, value]) => value !== null && typeof value !== 'object'
        )
)

/*
    Step 1. Object.entries(userObject)
      - 객체를 [key, value] 형태의 튜플 배열로 변환
      - 예: [
          ['name', '홍길동'],
          ['age', 25],
          ['isActive', true],
          ['deletedAt', null],
          ['address', { roadAddr: '서울시 00구 00로 123 (00동)', jiBunAddr: '서울시 00구 00동 123-4' }]
        ]

    Step 2. filter(([key, value]) => value !== null && typeof value !== 'object')
      - null 값과 object 타입의 값을 제외
      - 결과: [
          ['name', '홍길동'],
          ['age', 25],
          ['isActive', true]
        ]

    Step 3. Object.fromEntries(배열)
      - 필터링된 튜플 배열을 다시 객체로 변환
      - 결과: { name: '홍길동', age: 25, isActive: true }
*/