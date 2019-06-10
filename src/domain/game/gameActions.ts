import { IAppThunkAction } from "../store";
import { ItemName } from "types/gameTypes";

interface IResetGameAction {
    type: "GAME_ACTION:RESET_STATE";
}

interface ISelectItemGameAction {
    type: "GAME_ACTION:SELECT_ITEM";
    payload: {
        itemKey: ItemName;
    };
}

export type GameActions = IResetGameAction | ISelectItemGameAction;
type TA = IAppThunkAction<GameActions>;
export const gameActions = {
    resetGame: (): TA => (dispatch) => {
        dispatch({
            type: "GAME_ACTION:RESET_STATE"
        });
    },
    selectItem: (args: ISelectItemGameAction["payload"]): TA => (dispatch) => {
        dispatch({
            type: "GAME_ACTION:SELECT_ITEM",
            payload: args
        });
    }
};