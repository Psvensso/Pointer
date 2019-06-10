/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";
import { provide } from "../../domain/provide";
import { gameActions } from "../../domain/game/gameActions";
import { Panel, PanelHeader, PanelBody } from "components/panel";
import styled from "@emotion/styled";
import { ItemName, GameItems } from "types/gameTypes";

const styles = {
    panel: css({ flex: 1 }),
    panelHeader: css({
        textTransform: "none",
        backgroundColor: "#25076B"
    }),
    panelBody: css({
        padding: 15,
        backgroundColor: "#46178F",
        overflowY: "auto"
    })
};

const ItemBlock = styled("div")({
    "padding": 15,
    "margin": 15,
    "fontSize": 32,
    "userSelect": "none",
    "&:hover": {
        cursor: "pointer"
    }
});

export class CollectorPanelClass extends React.Component<AllProps, {}>{

    render() {
        const { selectItem, activeScoreTable } = this.props;
        const regularItems = activeScoreTable.regular;
        const itemKeys = Object.keys(regularItems) as ItemName[];
        return (
            <Panel css={styles.panel}>
                <PanelHeader css={styles.panelHeader}>
                    Kahoow! Points
                </PanelHeader>
                <PanelBody css={styles.panelBody}>
                    <h1>Items</h1>
                    <div css={{ display: "flex", flexWrap: "wrap" }}>
                        {itemKeys.map((itemKey) => (
                            <ItemBlock
                                css={css({
                                    backgroundColor: GameItems[itemKey].color
                                })}
                                key={itemKey}
                                onClick={() => {
                                    selectItem({
                                        itemKey
                                    });
                                }}
                            >
                                {itemKey}
                            </ItemBlock>
                        ))}
                    </div>
                </PanelBody>
            </Panel>
        );
    }
}

const provider = provide((state) => (
    { activeScoreTable: state.activeScoreTable }),
    { ...gameActions }
).withExternalProps<{ className?: string; }>();
type AllProps = typeof provider.allProps;

export const CollectorPanel = provider.connect(CollectorPanelClass);