import { Action, Dispatch, AnyAction } from 'redux'

declare module 'react-redux'
{
    export function useDispatch<TDispatch = Dispatch<any>>(): TDispatch;
    export function useDispatch<A extends Action = AnyAction>(): Dispatch<A>;

    /**
     * A hook to access the redux store's state. This hook takes a selector function
     * as an argument. The selector is called with the store state.
     *
     * This hook takes an optional equality comparison function as the second parameter
     * that allows you to customize the way the selected state is compared to determine
     * whether the component needs to be re-rendered.
     *
     * @param selector the selector function
     * @param equalityFn the function that will be used to determine equality
     *
     * @returns the selected state
     *
     * @example
     *
     * import React from 'react'
     * import { useSelector } from 'react-redux'
     * import { RootState } from './store'
     *
     * export const CounterComponent = () => {
     *   const counter = useSelector((state: RootState) => state.counter)
     *   return <div>{counter}</div>
     * }
     */
    export function useSelector<TState, TSelected>(
        selector: (state: TState) => TSelected,
        equalityFn?: (left: TSelected, right: TSelected) => boolean
    ): TSelected;

    /**
     * A hook to access the redux store.
     *
     * @returns the redux store
     *
     * @example
     *
     * import React from 'react'
     * import { useStore } from 'react-redux'
     *
     * export const ExampleComponent = () => {
     *   const store = useStore()
     *   return <div>{store.getState()}</div>
     * }
     */
    export function useStore<S = any, A extends Action = AnyAction>(): Store<S, A>;
}