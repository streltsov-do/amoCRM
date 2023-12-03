import React from "react";
import { useMediaQuery } from "react-responsive";
import {
    MOBILE_WIDTH_BREAKPOINT,
    SECOND_WIDTH_BREAKPOINT,
} from "../../utils/constants";

import {
    Container,
    ListUl,
    ListTitle,
    DivFlex,
    Info,
    ListUl2,
    Rights,
    Rights2,
} from "./styles/Footer";
import { NavLi } from "../navigation/NavLi/NavLi";
import { NavA } from "../navigation/NavA/NavA";
import { Messenger, MessengerType } from "../navigation/Messenger/Messenger";

function Footer() {
    const isShort = useMediaQuery({ maxWidth: SECOND_WIDTH_BREAKPOINT });
    const isMobile = useMediaQuery({ maxWidth: MOBILE_WIDTH_BREAKPOINT });

    return (
        <Container>
            <DivFlex
                flex_direction={isMobile ? "column" : ""}
                margin_bottom={(isMobile && 30) || 0}
            >
                <ListUl margin_right={isShort ? 10 : 98} margin_bottom={23}>
                    <ListTitle margin_bottom={10}>О компании</ListTitle>
                    <NavLi href="/" font_size_mobile={14}>
                        Партнёрская программа
                    </NavLi>
                    <NavLi href="/" font_size_mobile={14}>
                        Вакансии
                    </NavLi>
                </ListUl>

                <div>
                    <ListTitle margin_bottom={20}>Меню</ListTitle>
                    <DivFlex $gap={isShort ? 10 : 48}>
                        {/* <DivFlex $gap={48}> */}
                        <ListUl margin_right={isShort ? 10 : 52}>
                            <NavLi
                                href="/"
                                fontWeight={500}
                                font_size_mobile={14}
                            >
                                Расчёт{(isMobile && <br />) || " "}стоимости
                            </NavLi>
                            <NavLi
                                href="/"
                                fontWeight={500}
                                font_size_mobile={14}
                            >
                                Услуги
                            </NavLi>
                            <NavLi
                                href="/"
                                fontWeight={500}
                                font_size_mobile={14}
                            >
                                Виджеты
                            </NavLi>
                            <NavLi
                                href="/"
                                fontWeight={500}
                                font_size_mobile={14}
                            >
                                Интеграции
                            </NavLi>
                            <NavLi
                                href="/"
                                fontWeight={500}
                                font_size_mobile={14}
                            >
                                Наши клиенты
                            </NavLi>
                        </ListUl>
                        <ListUl>
                            <NavLi
                                href="/"
                                fontWeight={500}
                                font_size_mobile={14}
                            >
                                {!isMobile ? (
                                    <>Кейсы</>
                                ) : (
                                    <>
                                        Благодарность
                                        <br />
                                        клиентов
                                    </>
                                )}
                            </NavLi>
                            <NavLi
                                href="/"
                                fontWeight={500}
                                font_size_mobile={14}
                            >
                                {!isMobile ? (
                                    <>Благодарственные письма</>
                                ) : (
                                    <>Кейсы</>
                                )}
                            </NavLi>
                            <NavLi
                                href="/"
                                fontWeight={500}
                                font_size_mobile={14}
                            >
                                Сертификаты
                            </NavLi>
                            <NavLi
                                href="/"
                                fontWeight={500}
                                font_size_mobile={14}
                            >
                                Блог на Youtube
                            </NavLi>
                            <NavLi
                                href="/"
                                fontWeight={500}
                                font_size_mobile={14}
                            >
                                Вопрос / Ответ
                            </NavLi>
                        </ListUl>
                    </DivFlex>
                </div>
            </DivFlex>

            <ListUl2>
                <ListTitle margin_bottom={(isMobile && 12) || 0}>
                    Контакты
                </ListTitle>

                <NavA href="tel:+7 555 555-55-55">+7 555 555-55-55</NavA>

                <DivFlex $gap={10}>
                    <Messenger type={MessengerType.telegram}></Messenger>
                    <Messenger type={MessengerType.viber}></Messenger>
                    <Messenger type={MessengerType.whatsapp}></Messenger>
                </DivFlex>
                <Info>Москва, Путевой проезд 3с1, к 902</Info>
                <div>
                    <Rights $bottom={40} margin_top={(isMobile && 40) || 50}>
                        ©WELBEX 2022. Все права защищены.
                    </Rights>
                    <Rights2 $bottom={20}>Политика конфиденциальности</Rights2>
                </div>
            </ListUl2>
        </Container>
    );
}

export { Footer };
