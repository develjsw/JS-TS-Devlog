### 객체를 배열로 만드는 법

- Case 1. Key 값만 배열로 만들기 → Object.keys()
  ```ts
  const obj = { A: 1, B: 2, C: 3 };
  const keyArr = Object.keys(obj); // ['A', 'B', 'C']
  ```

- Case 2. Value 값만 배열로 만들기 → Object.values()
  ```ts
  const obj = { A: 1, B: 2, C: 3 };
  const valueArr = Object.values(obj); // [1, 2, 3]
  ```

- Case 3. [Key, Value] 쌍 배열로 만들기 → Object.entries()
  ```ts
  const obj = { A: 1, B: 2, C: 3 };
  const entryArr = Object.entries(obj); // [['A', 1], ['B', 2], ['C', 3]]
  ```
  ```ts
  const goods = { computer: 2200000, phone: 1300000, earbuds: 200000 };

  let goodsArr = [];
    
  for (const [goodsName, goodsPrice] of Object.entries(goods)) {
      const goodsTax = goodsPrice * 0.1;
      const totalPrice = goodsPrice + goodsTax;
    
      goodsArr.push(
          [
              goodsName, { goodsPrice, goodsTax, totalPrice }
          ]
      );
  }
  
  /*
      // goodsArr 결과 값
      [
          ['computer', { goodsPrice: 2200000, goodsTax: 220000, totalPrice: 2420000 }],
          ['phone', { goodsPrice: 1300000, goodsTax: 130000, totalPrice: 1430000 }],
          ['earbuds', { goodsPrice:  200000, goodsTax:  20000, totalPrice:  220000 }]
      ]
  */

  // 아래처럼 Map을 활용해서 상품별로 데이터 가져오기 쉽게 만들 수도 있음
  // const goodsMap = new Map(goodsArr); // Map(3) {'computer' => {…}, 'phone' => {…}, 'earbuds' => {…}}
  // console.log(goodsMap.get('computer')); // { goodsPrice: 2200000, goodsTax: 220000, totalPrice: 2420000 }
  ```
