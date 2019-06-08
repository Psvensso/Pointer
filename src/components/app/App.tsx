import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { provide } from "../../domain/provide";
import { gameActions } from "../../domain/game/gameActions";

class RootClass extends React.Component<AppProps, {}>{
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {this.props.gameState.someProps}
        </header>
      </div>
    );
  }
}

const provider = provide((state) => ({
  gameState: state.game
}),
  {
    ...gameActions
  }
);

type AppProps = typeof provider.allProps;

export default provider.connect(RootClass);
