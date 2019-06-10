import * as React from "react";
import { connect as nativeConnect } from "react-redux";
import { IMainStoreState } from "./store";
 
export type ReactComponentClass<T, S> = new (props: T) => React.Component<T, S>;
export class ComponentBuilder<TOwnProps, TActions, TExternalProps> {
    constructor(private stateToProps: (appState: IMainStoreState, props: any) => TOwnProps, private actionCreators: TActions) {
    }

    public withExternalProps<TAddExternalProps>() {
        return this as any as ComponentBuilder<TOwnProps, TActions, TAddExternalProps>;
    }

    public get allProps(): TOwnProps & TActions & TExternalProps { return null as any; }

    public connect<TState>(componentClass: ReactComponentClass<TOwnProps & TActions & TExternalProps, TState>): ReactComponentClass<TExternalProps, TState> {
        return nativeConnect(this.stateToProps, this.actionCreators as any)(componentClass as any) as any;
    }
}

/**
 * The provide function extends the react-redux's connect function. 
 * It makes it easier for TypeScript to apply Type Inference and provide props/state
 * directly to the component. Think of it as a "bound" connect.
 * @param stateToProps 
 * @param actionCreators 
 */
export function provide<TOwnProps, TActions>(stateToProps: (appState: IMainStoreState, props: any) => TOwnProps, actionCreators: TActions) {
    return new ComponentBuilder<TOwnProps, TActions, {}>(stateToProps, actionCreators);
}