const numberArr = [1000, 255, 715, 49999, 10, 33333, 16666];

// 숫자를 필터링 하는 방법은 대표적으로 아래 3가지 방법이 있음
// 성능 차이는 거의 없기 때문에 상황에 따라 아무 방식이나 사용 가능
numberArr.filter((item) => String(item).slice(0, 1) === '1'); // [1000, 10, 16666]

numberArr.filter((item) => String(item).charAt(0) === '1'); // [1000, 10, 16666]

numberArr.filter((item) => String(item)[0] === '1'); // [1000, 10, 16666]