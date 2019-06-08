import { Store, createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { selectionsReducer } from "./game/selectionsReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { activeScoreTableReducer } from "./settings/activeScoreTableReducer";

export const rootReducers = {
  activeScoreTable: activeScoreTableReducer,
  selections: selectionsReducer
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
