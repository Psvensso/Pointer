import { Reducer } from "redux";
import { GameActions } from "./gameActions";

type GameState = {
    someProps: string;
};

const defaultState: GameState = {
    someProps: "Init"
};

export const gameReducer: Reducer<GameState, GameActions> = (state = defaultState, action: GameActions): GameState => {
    switch (action.type) {
        case "GAME_ACTION:RESET_STATE": {
            if (Array.isArray(action.payload)) {

                return state;
            }
        }
    }

    return state;
};
