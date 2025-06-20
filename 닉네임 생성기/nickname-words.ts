export const adjectives = ['기쁜', '즐거운', '희망적인'] as const;
export const nouns = ['사람', '로봇', '강아지', '고양이'] as const;

export type Adjectives = typeof adjectives;
export type Nouns = typeof nouns;