import * as React from "react";
import styled from "@emotion/styled";
import { CalculateScoreResult } from "utils/pointsCalculator";
import { ScoreListItem, ScoreListItemProps } from "./scoreListItem";
import { ItemName, GameItems } from "types/gameTypes";

const ScoreListWrapper = styled("div")({
    flex: 1,
    display: "flex",
    flexDirection: "column"
});

const ScoreListHeader = styled("div")({
    "display": "flex",
    "borderBottom": "1px solid gray",
    "> div": {
        padding: 5,
        textAlign: "center",
        width: "33%",
        textTransform: "uppercase"
    }
});

const ScoreListBody = styled("div")({
    flex: 1,
    display: "flex",
    flexDirection: "column",
    overflowY: "auto"
});

type ScoreListProps = {
    results: CalculateScoreResult;
    selections: MapLike<number>;
    className?: string;
};

export const ScoreList = (p: ScoreListProps) => {
    const { className, results, selections } = p;

    const items = Object.keys(results.itemScores).map<ScoreListItemProps>((key, i) => {
        return {
            key,
            count: selections[key as ItemName],
            name: key,
            color: GameItems[key as ItemName].color,
            ...results.itemScores[key]
        };
    }).sort((a, b) => b.score - a.score);

    return (
        <ScoreListWrapper className={className}>
            <ScoreListHeader>
                <div>Item</div>
                <div>Qty</div>
                <div>Score</div>
            </ScoreListHeader>
            <ScoreListBody>
                {items.map((props) => (
                    <ScoreListItem {...props} />
                ))}
            </ScoreListBody>
        </ScoreListWrapper>
    );
};