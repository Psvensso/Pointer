import { Reducer } from "redux";
import { GameActions } from "./gameActions";
import { ItemMap } from "types/gameTypes";

const defaultState: ItemMap<number> = {
    A: 1,
    B: 5,
    C: 3
};

export const selectionsReducer: Reducer<ItemMap<number>, GameActions>
    = (state = defaultState, action) => {
        switch (action.type) {
            case "GAME_ACTION:RESET_STATE": {
                return {};
            }
            case "GAME_ACTION:SELECT_ITEM": {
                state[action.payload.itemKey] = (state[action.payload.itemKey] || 0) + 1;
                return { ...state };
            }
        }
        return state;
    };
