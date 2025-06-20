import { adjectives, Adjectives, nouns, Nouns } from './nickname-words';

const generateNicknameCombinations = (adjectives: Adjectives, nouns: Nouns) => {
    const nickNames = new Set<string>();

    for (const item of adjectives) {
        for (const subItem of nouns) {
            nickNames.add(`${item}${subItem}`);
            nickNames.add(`${subItem}${item}`);
        }
    }

    return nickNames;
};

export const removeUsedNicknames = (usedNicknames: readonly string[]) => {
    const allNicknames = generateNicknameCombinations(adjectives, nouns);

    for (const item of usedNicknames) {
        allNicknames.delete(item);
    }
    return allNicknames;
};

export const pickRandomNickname = (availableNicknames: Set<string>) => {
    const uniqueNicknames = [...availableNicknames];

    if (!uniqueNicknames.length) return null;

    return uniqueNicknames[Math.floor(Math.random() * uniqueNicknames.length)];
};