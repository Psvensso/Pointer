import { Reducer } from "redux";
import { GameActions } from "./gameActions";

export const selectionsReducer: Reducer<MapLike<number>, GameActions> = (state = {}, action) => {
    switch (action.type) {
        case "GAME_ACTION:RESET_STATE": {
            return {};
        }
        case "GAME_ACTION:SELECT_ITEM": {
            state[action.payload.itemKey] = (state[action.payload.itemKey] || 0) + 1;
            return {...state};
        }
    }
    return state;
};
