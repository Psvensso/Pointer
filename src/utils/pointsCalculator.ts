import { ScoreTable, ItemName } from "types/gameTypes";

type CalculateScoreProps = {
    selections: MapLike<number>;
    scoreTable: ScoreTable;
};

export type CalculateScoreResult = {
    totalScore: number;
    totalBonus: number;
    itemScores: MapLike<{
        score: number;
        bonus: number;
    }>
};

export function calculateScore({ selections: s, scoreTable }: CalculateScoreProps) {

    return Object.keys(s).reduce<CalculateScoreResult>((results, k) => {
        const itemKey = k as ItemName;
        const itemCount = s[itemKey];
        let score = 0;
        let bonus = 0;

        //Calculate regular value
        const value = scoreTable.regular[itemKey] || 0;
        score = itemCount * value;
        results.totalScore += score;

        const bonusRule = scoreTable.bonus[itemKey];
        if (!!bonusRule) {
            //Calculate bonus scores
            const { value: bonusValue, count: noRequiredForBonus } = bonusRule;
            bonus = Math.floor(itemCount / noRequiredForBonus) * bonusValue;
            results.totalBonus += bonus;
        }

        results.itemScores[itemKey] = { score, bonus };

        return results;
    }, { totalScore: 0, totalBonus: 0, itemScores: {} });

}
