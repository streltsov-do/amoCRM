import styled from "styled-components/macro";

const Div = styled.div`
    background-color: #0e1014;
    padding: 46px 150px 0 150px;
    position: relative;
`;

const Absolute = styled.img<{
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
`;

const Absolute1 = styled.div<{
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
    background: #961A1A;
    filter: blur(196px);
    z-index: 100;
`;
const Absolute2 = styled(Absolute1)`
    border-radius: 259px;
    /* opacity: 0.5; */
    background: #833ab4;
    /* filter: blur(196px); */
    width: 259px;
    height: 259px;
    /* top: -154px;
    left: 602px; */
    
`;

export { Div, Absolute, Absolute1, Absolute2 };
