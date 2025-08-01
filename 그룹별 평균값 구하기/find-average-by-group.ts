// 아파트 호실별 평균가 구하기

const rawApartmentPrices  = [
    { dongCode: '201', hoCode: '101', price: 100000 },
    { dongCode: '202', hoCode: '101', price: 120000 },
    { dongCode: '301', hoCode: '102', price: 90000 },
    { dongCode: '401', hoCode: '101', price: 110000 },
    { dongCode: '502', hoCode: '102', price: 95000 },
    { dongCode: '402', hoCode: '101', price: 110000 }
];

const hoCodePriceMap = new Map<string, number[]>();

for (const { hoCode, price } of rawApartmentPrices) {
    if (!hoCodePriceMap.has(hoCode)) {
        hoCodePriceMap.set(hoCode, []);
    }

    //apartmentListMap.get(hoCode).push(price);
    hoCodePriceMap.get(hoCode)!.push(price);
}

const getAverage = (nums: number[]) => nums.reduce((acc, cur) => acc + cur, 0) / nums.length;
const averagePriceByHoCode =
    [...hoCodePriceMap.entries()].map(([hoCode, prices]) => ({ hoCode, averagePrice: getAverage(prices) }))

console.log(averagePriceByHoCode);
// 결과
// [
//     { hoCode: '101', averagePrice: 110000 },
//     { hoCode: '102', averagePrice: 92500 }
// ]
