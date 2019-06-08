/** @jsx jsx */
import * as React from "react";
import { jsx, css } from "@emotion/core";
import { provide } from "../../domain/provide";
import { gameActions } from "../../domain/game/gameActions";
import { Panel, PanelHeader, PanelBody } from "components/panel";
import { calculateScore } from "utils/pointsCalculator";

class ScorePanelClass extends React.Component<AllProps, {}>{
    render() {
        const selections = this.props.selections;
        const { itemScores, totalBonus, totalScore } = calculateScore({
            selections: this.props.selections,
            scoreTable: this.props.scoreTable
        });

        return (
            <Panel>
                <PanelHeader css={css({ backgroundColor: "rgb(5, 66, 185)" })}>
                    Player Items
                    </PanelHeader>
                <PanelBody css={css({
                    display: "flex", flexDirection: "column",
                    padding: -15, backgroundColor: "rgb(19, 104, 206)"
                })} >
                    <div css={css({ flex: 1, overflowY: "auto" })}>
                        {Object.keys(itemScores).map((key) => {
                            const { bonus, score } = itemScores[key];
                            return (
                                <div key={key}>{key}: {selections[key]} {score} {bonus}</div>
                            );
                        })}
                    </div>
                    <div>
                        <div>Bonus: {totalBonus}</div>
                        <div>Total score: {totalScore}</div>
                    </div>
                </PanelBody>
            </Panel >
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