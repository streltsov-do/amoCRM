import styled from "styled-components/macro";
import { MOBILE_WIDTH_BREAKPOINT } from "../../../utils/constants";

const Container = styled.div`
    max-width: 1140px;
    height: 315px;
    display: flex;
    padding: 55px 0 0 0;
    position: relative;
    justify-content: space-between;
    z-index: 3;

    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        padding: 41px 0 0 16px;
        width: 320px;
        flex-direction: column;
        background-color: #0e1014;
    }
`;

const ListTitle = styled.p<{ margin_bottom?: number }>`
    color: var(--dark-gray, #656566);

    /* маленькие заголовки */
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.7px;
    text-transform: uppercase;
    margin-bottom: ${(props) => props.margin_bottom}px;
`;

const ListUl = styled.ul<{
    margin_right?: number;
    gap?: number;
    margin_bottom?: number;
}>`
    list-style: none;
    margin-right: ${(props) => props.margin_right}px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        margin-right: 0;
        margin-bottom: ${(props) => props.margin_bottom}px;
    }
`;
const ListLink = styled.li`
    margin-bottom: 10px;
`;

const ListLinkA = styled.a`
    color: var(--light-text, #e4e5ea);
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        width: 100px;
    }
`;
const DivFlex = styled.div<{
    $gap?: number;
    flex_direction?: string;
    margin_bottom?: number;
}>`
    display: flex;
    gap: ${(props) => props.$gap}px;
    flex-direction: ${(props) => props.flex_direction || "row"};
    margin-bottom: ${(props) => props.margin_bottom || 0}px;
`;

const Info = styled.div`
    color: var(--light-text, #e4e5ea);
    text-align: right;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        font-size: 14px;
    }
`;

const ListUl2 = styled(ListUl)`
    /* position: absolute; */
    min-width: 289px;
    right: 0;
    top: 55px;
    align-items: flex-end;
    gap: 20px;
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        align-items: flex-start;
        gap: 8px;
    }
`;

const Rights = styled.div<{ $bottom: number; margin_top?: number }>`
    margin-top: ${(props) => props.margin_top}px;
    color: var(--light-text, #e4e5ea);
    text-align: right;
    font-family: Montserrat;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    bottom: ${(props) => props.$bottom}px;
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        text-align: left;
        margin-bottom: 5px;
    }
`;

const Rights2 = styled(Rights)`
    text-decoration-line: underline;
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        margin-bottom: 0;
    }
`;

export {
    Container,
    ListUl,
    ListUl2,
    ListTitle,
    ListLink,
    ListLinkA,
    DivFlex,
    Info,
    Rights,
    Rights2,
};
