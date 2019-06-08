/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";
import { provide } from "../../domain/provide";
import { gameActions } from "../../domain/game/gameActions";
import { Panel, PanelHeader, PanelBody } from "components/panel";
import styled from "@emotion/styled";

const ItemBlock = styled("div")({
    padding: 15,
    margin: 15,
    backgroundColor: "red"
});

export class CollectorPanelClass extends React.Component<AllProps, {}>{

    render() {
        const { selectItem, activeScoreTable } = this.props;
        const regularItems = activeScoreTable.regular;

        return (
            <Panel css={css({ flex: 1 })}>
                <PanelHeader css={css({ backgroundColor: "#25076B" })}>
                    Kahoow! Points
                </PanelHeader>
                <PanelBody css={css({ backgroundColor: "#46178F" })}>
                    <h1>Items</h1>
                    <div css={{ display: "flex", flexWrap: "wrap" }}>
                        {Object.keys(regularItems).map((itemKey) => (
                            <ItemBlock
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