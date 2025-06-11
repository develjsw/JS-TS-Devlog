// 객체 병합 테스트
const orders = [{'orderId':1, 'goodsId':1}, {'orderId':2, 'goodsId':1}, {'orderId':3, 'goodsId':2}];
const goods = [{'goodsId':1, 'price':10000}, {'goodsId':2, 'price':20000}];

// 방법1 - 간결한 코드, 100만 건 이상 성능상 이슈 발생 가능성 ↑
const merged1 = orders.map(({ goodsId, ...rest }) => ({
    ...rest,
    ...goods.find((item) => item.goodsId === goodsId)
}));

// 방법2 - 적당히 간결한 코드, 100만 건 이상의 데이터에도 성능상 이슈 가능성 ↓
const goodsMap = new Map(goods.map((g) => [g.goodsId, g]));

const merged2 = orders.map((order) => ({
    ...order,
    ...goodsMap.get(order.goodsId),
}));