/** @jsx jsx */
import * as React from "react";
import { jsx, css } from "@emotion/core";
import styled from "@emotion/styled/macro";

const ListItemWrapper = styled("div")({
    "display": "flex",
    "alignItems": "center",
    "borderBottom": "1px solid gray",
    "text-align": "center",
    "> div": {
        margin: "1em",
        textAlign: "center",
        width: "33%"
    }
});

export type ScoreListItemProps = {
    count: number;
    name: string;
    color: string;
    score: number;
    bonus: number;
};

export const ScoreListItem: React.FC<ScoreListItemProps> = (p) => {
    const { bonus, score, count, name, color } = p;

    return (
        <ListItemWrapper title={bonus + " in bonus given for this item!"}>
            <div>
                <span css={css({
                    padding: "1em",
                    display: "block",
                    backgroundColor: color
                })}>
                    {name}
                </span>
            </div>
            <div>{count}</div>
            <div>{score}</div>
        </ListItemWrapper>
    );
};