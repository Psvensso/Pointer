import { Store, createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { gameReducer } from "./game/gameReducer";
import { composeWithDevTools } from "redux-devtools-extension";
// tslint:disable-next-line: typedef
export const rootReducers = {
  game: gameReducer 
};

export type IMainStoreState = { [k in keyof (typeof rootReducers)]: ReturnType<(typeof rootReducers)[k]> };

export type IAppThunkAction<TAction> = (dispatch: (action: TAction) => void, getState: () => IMainStoreState) => void;

/**
 * getStore 
 * Wraps store in a 'singleton' function,
 */
let store: Store<IMainStoreState>;

export function getStore(): Store<IMainStoreState> {
  if (!!store) {
    return store;
  }

  const rootReducer = combineReducers({
    ...rootReducers
  });

  const composedEnhancers = composeWithDevTools(applyMiddleware(thunk));
  store = createStore(rootReducer, undefined, composedEnhancers);

  return store;
}
