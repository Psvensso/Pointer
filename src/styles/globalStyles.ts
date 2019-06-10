/** @jsx jsx */
import { css } from "@emotion/core";
import emotionReset from "emotion-reset";

export const globalStyles = [
    css(emotionReset),
    css({
        "#root": {
            height: "100%",
        },
        "body, html": {
            height: "100%",
            fontSize: 14,
            color: "white",
            fontFamily: "'Montserrat', sans-serif",
            textTransform: "uppercase"
        }
    })
];