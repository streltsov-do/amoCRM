import styled from "styled-components/macro";

const A = styled.a<{ fontWeight?: number; margin_right?: number }>`
    text-decoration: none;
    color: var(--light-text, #e4e5ea);
    font-weight: ${(props) => props.fontWeight || 400};
    margin-right: ${(props) => props.margin_right || 0}px;
    white-space: nowrap;
    color: var(--light-text, #e4e5ea);
    /* text-align: right; */
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;
export { A };
