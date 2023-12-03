import React from "react";
import { Button } from "../../components/Button/Button";

import {
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
} from "./styles/PageMain";

function PageMain() {
    return (
        <Container>
            <div>
                <Title>
                    Зарабатывайте
                    <br />
                    больше
                </Title>
                <TitleName>с WELBEX</TitleName>
                <TitleDesc>Развиваем и контролируем продажи за вас</TitleDesc>
            </div>
            <Div2>
                <BonusTitle>
                    Вместе с 
                    <BonusTitleColored>бесплатной</BonusTitleColored>{" "}
                    <BonusTitleColored>консультацией</BonusTitleColored>{" "}
                    мы дарим:
                </BonusTitle>
                <Presents>
                    <PresentDiv>
                        <PresentTitle>Виджеты</PresentTitle>
                        <PresentDesc>
                            30 готовых 
                            <br />
                            решений
                        </PresentDesc>
                    </PresentDiv>
                    <PresentDiv>
                        <PresentTitle>Dashboard</PresentTitle>
                        <PresentDesc>
                            с показателями
                            <br />
                            вашего бизнеса
                        </PresentDesc>
                    </PresentDiv>
                    <PresentDiv>
                        <PresentTitle>Skype Аудит</PresentTitle>
                        <PresentDesc>
                            отдела продаж
                            <br />
                            и CRM системы
                        </PresentDesc>
                    </PresentDiv>
                    <PresentDiv>
                        <PresentTitle>35 дней</PresentTitle>
                        <PresentDesc>
                            использования
                            <br />
                            CRM
                        </PresentDesc>
                    </PresentDiv>
                </Presents>
                <Button
                    onClick={(e) => {console.log("consultation test")}}
                >
                    Получить консультацию
                </Button>
            </Div2>
        </Container>
    );
}

export { PageMain };
