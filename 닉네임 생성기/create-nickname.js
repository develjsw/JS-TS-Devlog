
// Step1. 형용사와 명사를 조합하여 닉네임을 만들되, 중복없이 생성
// Step2. DB 에서 사용한 닉네임은 제외하고 생성 가능하도록 구현

const adjectives = ['기쁜', '즐거운', '희망적인'];
const nouns = ['사람', '로봇', '강아지', '고양이'];
const usedNickNames = ['로봇-기쁜', '로봇-즐거운', '강아지-즐거운'];

const generateNicknameCombinations = (adjectives, nouns) => {
    const nickNames = new Set();

    for (const item of adjectives) {
        for (const subItem of nouns) {
            nickNames.add(`${item}-${subItem}`);
            nickNames.add(`${subItem}-${item}`);
        }
    }

    return nickNames;
}

const removeUsedNicknames = (allNicknames, usedNicknames) => {
    for (const item of usedNickNames) {
        allNicknames.delete(item);
    }
    return allNicknames;
}

const pickRandomNickname = (availableNicknames) => {
    const uniqueNicknames = [...availableNicknames];

    if (!uniqueNicknames.length) return null;

    return uniqueNicknames[Math.floor(Math.random() * uniqueNicknames.length)];
}

const allNicknames = generateNicknameCombinations(adjectives, nouns);
const availableNicknames = removeUsedNicknames(allNicknames, usedNickNames);
const randomNickname = pickRandomNickname(availableNicknames);

console.log(randomNickname);
