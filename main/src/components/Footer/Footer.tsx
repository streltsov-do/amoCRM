import React from "react";

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
    return (
        <Container>
            <DivFlex>
                <ListUl margin_right={98}>
                    <ListTitle margin_bottom={20}>О компании</ListTitle>
                    <NavLi href="/">Партнёрская программа</NavLi>
                    <NavLi href="/">Вакансии</NavLi>
                </ListUl>

                <div>
                    <ListTitle margin_bottom={20}>Меню</ListTitle>
                    <DivFlex>
                        <ListUl margin_right={52}>
                            <NavLi href="/" fontWeight={500}>
                                Расчёт стоимости
                            </NavLi>
                            <NavLi href="/" fontWeight={500}>
                                Услуги
                            </NavLi>
                            <NavLi href="/" fontWeight={500}>
                                Виджеты
                            </NavLi>
                            <NavLi href="/" fontWeight={500}>
                                Интеграции
                            </NavLi>
                            <NavLi href="/" fontWeight={500}>
                                Наши клиенты
                            </NavLi>
                        </ListUl>
                        <ListUl>
                            <NavLi href="/" fontWeight={500}>
                                Кейсы
                            </NavLi>
                            <NavLi href="/" fontWeight={500}>
                                Благодарственные письма
                            </NavLi>
                            <NavLi href="/" fontWeight={500}>
                                Сертификаты
                            </NavLi>
                            <NavLi href="/" fontWeight={500}>
                                Блог на Youtube
                            </NavLi>
                            <NavLi href="/" fontWeight={500}>
                                Вопрос / Ответ
                            </NavLi>
                        </ListUl>
                    </DivFlex>
                </div>
            </DivFlex>

            <ListUl2>
                <ListTitle>Контакты</ListTitle>

                <NavA href="tel:+7 555 555-55-55">+7 555 555-55-55</NavA>

                <DivFlex $gap={10}>
                    <Messenger type={MessengerType.telegram}></Messenger>
                    <Messenger type={MessengerType.viber}></Messenger>
                    <Messenger type={MessengerType.whatsapp}></Messenger>
                </DivFlex>
                <Info>Москва, Путевой проезд 3с1, к 902</Info>
                <div>
                    <Rights $bottom={40} margin_top={50}>
                        ©WELBEX 2022. Все права защищены.
                    </Rights>
                    <Rights2 $bottom={20}>Политика конфиденциальности</Rights2>
                </div>
            </ListUl2>
        </Container>
    );
}

export { Footer };
