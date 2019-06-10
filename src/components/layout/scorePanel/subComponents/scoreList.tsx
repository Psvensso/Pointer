import * as React from "react";
import styled from "@emotion/styled/macro";
import { CalculateScoreResult } from "utils/pointsCalculator";
import { ScoreListItem } from "./scoreListItem";
import { ItemName, GameItems } from "types/gameTypes";

type ScoreListProps = {
    results: CalculateScoreResult;
    selections: MapLike<number>;
    className?: string;
};

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

export const ScoreList = (p: ScoreListProps) => {
    const { className, results, selections } = p;
    const { itemScores: scores } = results;

    const items = Object.keys(scores)
        .sort((a, b) => scores[b].score - scores[a].score)
        .map((key) => (<ScoreListItem
            key={key}
            count={selections[key]}
            name={key}
            color={GameItems[key as ItemName].color}
            {...scores[key]}
        />));

    return (
        <ScoreListWrapper className={className}>
            <ScoreListHeader>
                <div>Item</div>
                <div>Qty</div>
                <div>Score</div>
            </ScoreListHeader>
            <ScoreListBody>
                {items}
            </ScoreListBody>
        </ScoreListWrapper>
    );
};