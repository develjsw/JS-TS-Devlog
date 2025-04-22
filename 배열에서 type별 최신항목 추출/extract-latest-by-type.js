// 기본 데이터
const appData = [
    { appId: 9, type: 'ios', name: 'b' },
    { appId: 10, type: 'ios', name: 'a' },
    { appId: 3, type: 'android', name: 'f' },
    { appId: 4, type: 'ios', name: 'e' },
    { appId: 8, type: 'ios', name: 'c' },
    { appId: 6, type: 'android', name: 'd' }
];

// ios 와 android 의 최신값(appId 기준) 1개씩 추출
const latestAppByType = ['ios', 'android']
    .map(appType =>
        appData
            .filter(item => item.type === appType)
            .sort((a, b) => b.appId - a.appId)
            .slice(0, 1)
    )
    .flat();