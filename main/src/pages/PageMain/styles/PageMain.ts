import styled from "styled-components/macro";

const Container = styled.div`
    padding-top: 90px;
    display: flex;
    justify-content: space-between;
    max-width: 1140px;
    z-index: 2;
    position: relative;
`;

const Title = styled.h1`
    color: #e4e5ea;
    font-family: Inter;
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
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
`;

const TitleDesc = styled.h3`
    width: 275px;
    color: var(--light-text, #e4e5ea);
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

const Div2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
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

const Presents = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 164px);
    grid-template-rows: repeat(2, auto);
    grid-gap: 30px;
    margin-bottom: 61px;
`;

const PresentDiv = styled.div``;

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
    Presents,
    PresentDiv,
    PresentTitle,
    PresentDesc,
};
