import styled from "styled-components/macro";
import { MOBILE_WIDTH_BREAKPOINT } from "../../../utils/constants";

const Container = styled.div`
    padding-top: 90px;
    display: flex;
    justify-content: space-between;
    max-width: 1140px;
    z-index: 2;
    position: relative;
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        padding-top: 40px;
        flex-direction: column;
        padding-left: 15px;
    }
`;

const Title = styled.h1`
    color: #e4e5ea;
    font-family: Inter;
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        font-size: 36px;
    }
`;

const TitleName = styled.h1`
    font-family: Inter;
    font-size: 48px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    background-image: linear-gradient(to right, #fcb045, #ff3f78);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 30px;
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        font-size: 36px;
        margin-bottom: 15px;
    }
`;

const TitleDesc = styled.h3`
    width: 275px;
    color: var(--light-text, #e4e5ea);
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        margin-bottom: 45px;
    }
`;

const Div2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        display: block;
    }
`;

const BonusTitle = styled.div`
    width: 291px;
    color: var(--light-text, #e4e5ea);
    text-align: right;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 40px;
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        text-align: left;
        font-size: 18px;
        margin-bottom: 20px;
    }
`;
const BonusTitleColored = styled.span`
    background: var(
        --gradient,
        linear-gradient(90deg, #fcb045 36.99%, #fd1d1d 100%)
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.9px;
    text-transform: uppercase;
`;
const BonusTitleColored2 = styled(BonusTitleColored)`
    background: var(
        --gradient,
        linear-gradient(90deg, #fcb045 36.99%, #fd1d1d 180%)
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

const Presents = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 164px);
    grid-template-rows: repeat(2, auto);
    grid-gap: 30px;
    margin-bottom: 61px;

    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        grid-template-columns: 115px auto;
        grid-column-gap: 10px;
        grid-row-gap: 14px;
        margin-bottom: 59px;
    }
`;

const PresentDiv = styled.div<{ $order?: number }>`
    order: ${(props) => props.$order};
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        display: flex;
        align-items: center;
        gap: 5px;
    }
`;

const Line = styled.div`
    width: 10px;
    height: 1px;
    background: linear-gradient(90deg, #fcb045 36.99%, #fd1d1d 100%);
`;

const PresentTitle = styled.div`
    color: var(--light-text, #e4e5ea);
    text-align: right;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.9px;
    text-transform: uppercase;
    margin-bottom: 6px;

    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        font-size: 13px;
        margin-bottom: 0;
        font-weight: 400;
        letter-spacing: 0.65px;
        font-family: Montserrat;
    }
`;
const PresentDesc = styled.div`
    color: #e4e5ea;
    text-align: right;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export {
    Container,
    Title,
    TitleName,
    TitleDesc,
    Div2,
    BonusTitle,
    BonusTitleColored,
    BonusTitleColored2,
    Presents,
    PresentDiv,
    PresentTitle,
    PresentDesc,
    Line,
};
