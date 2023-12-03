import React from "react";
import { NavA } from "../NavA/NavA";
import { MessengerImg } from "./styles/Messenger";

import svg_telegram from "./assets/images/telegram.svg";
import svg_viber from "./assets/images/viber.svg";
import svg_whatsapp from "./assets/images/whatsapp.svg";

enum MessengerType {
    telegram,
    viber,
    whatsapp,
}

function Messenger(props: { type: MessengerType }) {
    const { type } = props;
    let img: string;
    switch (type) {
        case MessengerType.telegram:
            img = svg_telegram;
            break;
        case MessengerType.viber:
            img = svg_viber;
            break;
        case MessengerType.whatsapp:
            img = svg_whatsapp;
            break;
    }
    return (
        <NavA href="/">
            <MessengerImg src={img}></MessengerImg>
        </NavA>
    );
}

export { Messenger, MessengerType };
