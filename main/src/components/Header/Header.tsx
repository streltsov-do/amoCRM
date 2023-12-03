import React from "react";
import {
    Container,
    LogoDesc,
    LogoDiv,
    LogoSvg,
    Logo1,
    Logo2,
    NavUl,
    Messengers,
    Nav,
} from "./styles/Header";
import svg_logo1 from "./assets/images/logo_part1.svg";
import svg_logo2 from "./assets/images/logo_part2.svg";
import { NavLi } from "../navigation/NavLi/NavLi";
import { NavA } from "../navigation/NavA/NavA";

import { Messenger, MessengerType } from "../navigation/Messenger/Messenger";

function Header() {
    return (
        <Container>
            <LogoDiv>
                <LogoSvg>
                    <LogoSvg>
                        <Logo1 src={svg_logo1} alt="logo1"></Logo1>
                        <Logo2 src={svg_logo2} alt="logo2"></Logo2>
                    </LogoSvg>
                </LogoSvg>
                <LogoDesc>
                    крупный интегратор CRM
                    <br />
                    в Росcии и ещё 8 странах
                </LogoDesc>
            </LogoDiv>
            <Nav>
                <NavUl>
                    <NavLi href="/">Услуги</NavLi>
                    <NavLi href="/">Виджеты</NavLi>
                    <NavLi href="/">Интеграции</NavLi>
                    <NavLi href="/">Кейсы</NavLi>
                    <NavLi href="/">Сертификаты</NavLi>
                </NavUl>
                <Messengers>
                    <NavA href="tel:+7 555 555-55-55" margin_right={17}>
                        +7 555 555-55-55
                    </NavA>
                    <Messenger type={MessengerType.telegram}></Messenger>
                    <Messenger type={MessengerType.viber}></Messenger>
                    <Messenger type={MessengerType.whatsapp}></Messenger>
                </Messengers>
            </Nav>
        </Container>
    );
}

export { Header };
