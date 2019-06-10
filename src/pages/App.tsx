/** @jsx jsx */
import React from "react";
import { jsx, Global, css } from "@emotion/core";
import { ScorePanel } from "./scorePanel/scorePanel";
import { CollectorPanel } from "./collectorPanel/collectorPanel";
import { globalStyles } from "../styles/globalStyles";

const App: React.FC = () => {
  return (
    <div css={css({ height: "100%", display: "flex" })}>
      <Global styles={globalStyles} />
      <CollectorPanel />
      <ScorePanel />
    </div>
  );
};

export default App;