import React from "react";

import { Li } from "./styles/NavLi";

import { NavA } from "../NavA/NavA";

function NavLi(props: {
    children: React.ReactNode;
    href?: string;
    fontWeight?: number;
}) {
    const { children, href, fontWeight } = props;

    return (
        <Li>
            <NavA href={href} fontWeight={fontWeight}>
                {children}
            </NavA>
        </Li>
    );
}

export { NavLi };
