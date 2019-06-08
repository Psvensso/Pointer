import { ScoreTable, ItemScore } from "types/gameTypes";

type CalculateScoreProps = {
    selections: MapLike<number>;
    scoreTable: ScoreTable;
};

type CalculateScoreResult = {
    totalScore: number;
    totalBonus: number;
    itemScores: MapLike<ItemScore>
};

export function calculateScore({ selections: s, scoreTable }: CalculateScoreProps) {

    return Object.keys(s).reduce<CalculateScoreResult>((results, itemKey) => {
        const itemCount = s[itemKey];
        results.itemScores[itemKey] = { score: 0, bonus: 0 };

        //Calculate regular value
        const value = scoreTable.regular[itemKey];
        const score = itemCount * value;
        results.itemScores[itemKey].score = score;
        results.totalScore += score;

        if (!scoreTable.bonus[itemKey]) {
            return results;
        }

        //Calculate bonus scores
        const { value: bonusValue, count: noRequiredForBonus } = scoreTable.bonus[itemKey];
        const bonusScore = Math.floor(itemCount / noRequiredForBonus) * bonusValue;
        results.totalBonus += bonusScore;
        results.itemScores[itemKey].bonus = bonusScore;

        return results;
    }, { totalScore: 0, totalBonus: 0, itemScores: {} });

}
