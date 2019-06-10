/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { getStore } from "./domain/store";
import { Global } from "@emotion/core";
import { CollectorPanel } from "components/layout/collectorPanel/collectorPanel";
import { ScorePanel } from "components/layout/scorePanel/scorePanel";
import { globalStyles } from "styles/globalStyles";

const store = getStore();
 
ReactDOM.render(
    <Provider store={store}>
        <div css={css({ height: "100%", display: "flex" })}>
            <Global styles={globalStyles} />
            <CollectorPanel />
            <ScorePanel />
        </div>
    </Provider>,
    document.getElementById("root")
);
