import { ScoreTable } from "types/gameTypes";
import { Reducer } from "redux";

const defaultActiveScoreTableState: ScoreTable = {
    bonus: {
        A: { count: 3, value: 200 },
        B: { count: 2, value: 90 }
    },
    regular: {
        A: 50,
        B: 30,
        C: 20,
        D: 15
    }
};

export const activeScoreTableReducer: Reducer<ScoreTable> = (state = defaultActiveScoreTableState) => {
    return state;
};