
const payments = [
    { paymentId: 10, goodsId: 500, status: 'PENDING' },
    { paymentId: 20, goodsId: 200, status: 'REFUND' },
    { paymentId: 30, goodsId: 200, status: 'COMPLETE' },
    { paymentId: 40, goodsId: 300, status: 'COMPLETE' },
    { paymentId: 50, goodsId: 200, status: 'PENDING' },
    { paymentId: 60, goodsId: 400, status: 'COMPLETE' },
];

const paymentsMap = new Map();

for (const { status, ...restPayment } of payments) {
    if (!paymentsMap.has(status)) {
        paymentsMap.set(status, []);
    }

    paymentsMap.get(status).push(restPayment);
}

/*
[ 결과 ]
    Map {
        'PENDING' => [
            { paymentId: 10, goodsId: 500 },
            { paymentId: 50, goodsId: 200 }
        ],
        'REFUND' => [
            { paymentId: 20, goodsId: 200 }
        ],
        'COMPLETE' => [
            { paymentId: 30, goodsId: 200 },
            { paymentId: 40, goodsId: 300 },
            { paymentId: 60, goodsId: 400 }
        ]
    }
*/
