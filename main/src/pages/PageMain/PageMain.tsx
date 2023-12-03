import React from "react";
import { useMediaQuery } from "react-responsive";
import { Button } from "../../components/Button/Button";
import { MOBILE_WIDTH_BREAKPOINT } from "../../utils/constants";

import {
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
} from "./styles/PageMain";

function PageMain() {
    const isMobile = useMediaQuery({ maxWidth: MOBILE_WIDTH_BREAKPOINT });

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
                    <BonusTitleColored2>консультацией</BonusTitleColored2>{" "}
                    мы дарим:
                </BonusTitle>
                <Presents>
                    <PresentDiv $order={isMobile ? 1 : 0}>
                        {isMobile && <Line />}
                        <PresentTitle>
                            {isMobile ? "30 Виджетов" : "Виджеты"}
                        </PresentTitle>
                        {!isMobile && (
                            <PresentDesc>
                                30 готовых 
                                <br />
                                решений
                            </PresentDesc>
                        )}
                    </PresentDiv>
                    <PresentDiv $order={isMobile ? 2 : 1}>
                        {isMobile && <Line />}
                        <PresentTitle>Dashboard</PresentTitle>
                        {!isMobile && (
                            <PresentDesc>
                                с показателями
                                <br />
                                вашего бизнеса
                            </PresentDesc>
                        )}
                    </PresentDiv>
                    <PresentDiv $order={isMobile ? 0 : 2}>
                        {isMobile && <Line />}
                        <PresentTitle>Skype Аудит</PresentTitle>
                        {!isMobile && (
                            <PresentDesc>
                                отдела продаж
                                <br />
                                и CRM системы
                            </PresentDesc>
                        )}
                    </PresentDiv>
                    <PresentDiv $order={isMobile ? 2 : 3}>
                        {isMobile && <Line />}
                        <PresentTitle>
                            {isMobile ? "Месяц AMOCRM" : "35 дней"}
                        </PresentTitle>
                        {!isMobile && (
                            <PresentDesc>
                                использования
                                <br />
                                CRM
                            </PresentDesc>
                        )}
                    </PresentDiv>
                </Presents>
                {!isMobile && (
                    <Button
                        onClick={(e) => {
                            console.log("consultation test");
                        }}
                    >
                        Получить консультацию
                    </Button>
                )}
            </Div2>
        </Container>
    );
}

export { PageMain };
