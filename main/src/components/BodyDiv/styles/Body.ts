import styled from "styled-components/macro";
import {
    FIRST_WIDTH_BREAKPOINT,
    MOBILE_WIDTH_BREAKPOINT,
} from "../../../utils/constants";

const Div = styled.div`
    background-color: #0e1014;
    padding: 46px 150px 0 150px;
    position: relative;

    @media (max-width: ${FIRST_WIDTH_BREAKPOINT}) {
        padding: 46px 150px 0 14px;
    }
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        max-width: 320px;
        min-height: 1115px;
        padding: 0;
        flex-shrink: 0;
    }
`;
const RedBallSmall = styled.svg`
    fill: radial-gradient(
        82.3% 82.3% at 27.25% 26.5%,
        rgba(255, 208, 208, 0.54) 0%,
        rgba(212, 93, 93, 0.26) 59.67%,
        rgba(167, 49, 49, 0.25) 78.59%,
        rgba(130, 25, 25, 0.25) 100%
    );

    filter: drop-shadow(3px 6px 27px rgba(223, 125, 125, 0.25));
    backdrop-filter: blur(2px);
    top: 547px;
    left: 851px;
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        top: ${402 + 55}px;
        left: 29px;
        max-width: 320px;
        min-height: 1115px;
        padding: 0 14px;
        flex-shrink: 0;
    }
`;
const Absolute = styled.img<{
    top?: number | string;
    right?: number;
    bottom?: number;
    left?: number;
    $width?: string;
    $height?: string;
}>`
    position: absolute;
    top: ${(props) => props.top || 0}px;
    right: ${(props) => props.right || 0}px;
    bottom: ${(props) => props.bottom || 0}px;
    left: ${(props) => props.left || 0}px;
    width: ${(props) => props.$width || "auto"};
    height: ${(props) => props.$height || "auto"};
`;

const PurpleLight = styled.div<{
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
}>`
    position: absolute;
    top: ${(props) => props.top || 0}px;
    right: ${(props) => props.right || 0}px;
    bottom: ${(props) => props.bottom || 0}px;
    left: ${(props) => props.left || 0}px;

    width: 311px;
    height: 311px;
    border-radius: 311px;
    opacity: 0.5;
    background: #961a1a;
    filter: blur(196px);
`;
const RedLight = styled(PurpleLight)`
    border-radius: 259px;
    /* opacity: 0.5; */
    background: #833ab4;
    /* filter: blur(196px); */
    width: 259px;
    height: 259px;
    /* top: -154px;
    left: 602px; */
    z-index: 2;
`;

export { Div, Absolute, PurpleLight, RedLight, RedBallSmall };
