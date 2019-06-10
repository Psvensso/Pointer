/**
 * GameItems
 * All possible items and their settings
 */
export const GameItems = {
    A: { color: "hsl(135,100%,40%)" },
    B: { color: "hsl(60,100%,40%)" },
    C: { color: "hsl(330,100%,40%)" },
    D: { color: "hsl(215,100%,40%)" },
    E: { color: "hsl(300,100%,40%)" },
    F: { color: "hsl(75,100%,40%)" },
    G: { color: "hsl(270,100%,40%)" },
    H: { color: "hsl(240,100%,40%)" },
    I: { color: "hsl(120,100%,40%)" },
    J: { color: "hsl(15,100%,40%)" },
    K: { color: "hsl(150,100%,40%)" },
    L: { color: "hsl(165,100%,40%)" },
    M: { color: "hsl(180,100%,40%)" },
    N: { color: "hsl(195,100%,40%)" },
    O: { color: "hsl(45,100%,40%)" },
    P: { color: "hsl(225,100%,40%)" },
    Q: { color: "hsl(105,100%,40%)" },
    R: { color: "hsl(255,100%,40%)" },
    S: { color: "hsl(90,100%,40%)" },
    T: { color: "hsl(285,100%,40%)" },
    U: { color: "hsl(355,100%,40%)" },
    V: { color: "hsl(315,100%,40%)" },
    X: { color: "hsl(30,100%,40%)" },
    Y: { color: "hsl(345,100%,40%)" },
    Z: { color: "hsl(10,100%,40%)" }
};

export type ItemName = keyof typeof GameItems;
export type ItemMap<T> = { [key in ItemName]?: T };

/** BonusRule
 * How much are each bonus worth
 * count: How many items are needed before a bonus is added
 * value: How much is the bonus worth
 */
export type BonusRule = {
    count: number;
    value: number;
};

/** ScoreTable
 * regular: Normal items and their value {[itemName]:value}
 * bonus: {[itemName]:BonusRule}
 */
export type ScoreTable = {
    regular: ItemMap<number>;
    bonus: ItemMap<BonusRule>;
};
