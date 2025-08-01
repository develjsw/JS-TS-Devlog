
// 거래 기록 데이터에서 상위 2개 값 가져오기

const trades = [
    { tradeId: 'T103', date: '2024-03-02' },
    { tradeId: 'T101', date: '2024-03-01' },
    { tradeId: 'T102', date: '2024-03-01' },
    { tradeId: 'T101', date: '2024-03-02' },
    { tradeId: 'T101', date: '2024-03-03' },
    { tradeId: 'T102', date: '2024-03-03' },
];

const listMap = new Map<string, number>();

for (const { tradeId } of trades) {
    if (!listMap.has(tradeId)) {
        listMap.set(tradeId, 0);
    }

    listMap.set(tradeId, (listMap.get(tradeId) ?? 0) + 1)
}

const top2Trades = [...listMap.entries()]
    .map(([tradeId, count]) => ({tradeId, count}))
    .sort((a, b) => b.count - a.count)
    .slice(0, 2);

console.log(top2Trades);
// 결과
// [ { tradeId: 'T01', count: 3 }, { tradeId: 'T02', count: 2 }]
