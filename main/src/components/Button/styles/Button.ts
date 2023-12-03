import styled from "styled-components/macro";

const Container = styled.button<{
    width?: number;
    height?: number;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}>`
    width: ${(props) => props.width || 262}px;
    height: ${(props) => props.height || 61}px;
    background: #4077f3;
    color: var(--light-text, #E4E5EA);
    text-align: center;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;

export { Container };
