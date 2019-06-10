/** @jsx jsx */
import * as React from "react";
import { jsx, css } from "@emotion/core";
import { provide } from "../../../domain/provide";
import { gameActions } from "../../../domain/game/gameActions";
import { Panel, PanelHeader, PanelBody } from "components/global/panel";
import { calculateScore } from "utils/pointsCalculator";
import { ScoreList } from "./subComponents/scoreList";
import styled from "@emotion/styled/macro";

const styles = {
    header: css({ backgroundColor: "rgb(5, 66, 185)" }),
    body: css({
        overflowY: "hidden",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "rgb(19, 104, 206)"
    }),
    totalsAndBonus: css({
        borderTop: "1px solid gray",
        padding: "1em",
        display: "flex",
        alignItems: "center",
        div: { flex: 1 }
    })
};

const NewGameBtn = styled("button")({
    "&:hover": {
        cursor: "pointer"
    },
    "fontWeight": 700,
    "padding": ".875em 1em",
    "backgroundColor": "#26890C"
});

class ScorePanelClass extends React.Component<AllProps, {}>{
    render() {
        const { selections, scoreTable } = this.props;
        const results = calculateScore({
            selections: (selections as MapLike<number>),
            scoreTable
        });

        return (
            <Panel css={css({ minWidth: 250 })}>
                <PanelHeader css={styles.header}>
                    <h1>Player Items</h1>
                </PanelHeader>
                <PanelBody css={styles.body} >
                    <ScoreList results={results} selections={selections as MapLike<number>} />
                    <div css={styles.totalsAndBonus}>
                        <div>
                            Bonus
                        </div>
                        <div>
                            {results.totalBonus}
                        </div>
                    </div>
                    <div css={styles.totalsAndBonus}>
                        <div>
                            <div>Total</div>
                            <div>{results.totalScore}</div>
                        </div>
                        <div>
                            <NewGameBtn onClick={this.props.resetGame}>New game</NewGameBtn>
                        </div>
                    </div>
                </PanelBody>
            </Panel>
        );
    }
}

const provider = provide(
    (state) => ({
        selections: state.selections,
        scoreTable: state.activeScoreTable
    }),
    { ...gameActions }
).withExternalProps<{ className?: string; }>();
type AllProps = typeof provider.allProps;

export const ScorePanel = provider.connect(ScorePanelClass);