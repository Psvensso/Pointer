import { calculateScore } from "./pointsCalculator";

describe("pointsCalculator", () => {

    it("calculates total regular points", () => {
        const result = calculateScore({
            selections: { A: 3 },
            scoreTable: {
                bonus: {},
                regular: { A: 50 }
            }
        });

        expect(result.totalBonus).toEqual(0);
        expect(result.totalScore).toEqual(50 * 3);
    });

    it("calculates total bonus points", () => {
        const result = calculateScore({
            selections: { A: 7 },
            scoreTable: {
                bonus: {
                    A: { value: 100, count: 2 }
                },
                regular: {
                    A: 50
                }
            }
        });

        expect(result.totalBonus).toEqual(300);
        expect(result.totalScore).toEqual(50 * 7);
    });

    it("calculates item points", () => {
        const result = calculateScore({
            selections: { A: 7, B: 2, C: 1 },
            scoreTable: {
                bonus: {
                    A: { value: 100, count: 2 },
                    B: { value: 50, count: 2 }
                },
                regular: {
                    A: 50,
                    B: 30,
                    C: 10,
                }
            }
        });

        expect(result.itemScores.A.score).toEqual(50 * 7);
        expect(result.itemScores.A.bonus).toEqual(100 * 3);

        expect(result.itemScores.B.score).toEqual(30 * 2);
        expect(result.itemScores.B.bonus).toEqual(50 * 1);

        expect(result.itemScores.C.score).toEqual(10 * 1);
        expect(result.itemScores.C.bonus).toEqual(0);
    });
});