import { IAppThunkAction } from "../store";

interface IResetGameAction {
    type: "GAME_ACTION:RESET_STATE";
    payload?: any;
}

export type GameActions = IResetGameAction;

export const gameActions = {
    resetGame: (): IAppThunkAction<GameActions> => (dispatch) => {
        dispatch({
            type: "GAME_ACTION:RESET_STATE"
        });
    }
};