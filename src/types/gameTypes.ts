export type BonusRule = {
    count: number;
    value: number;
};

export type ScoreTable = {
    regular: MapLike<number>;
    bonus: MapLike<BonusRule>;
};

export type ItemScore = {
    score: number;
    bonus: number;
};