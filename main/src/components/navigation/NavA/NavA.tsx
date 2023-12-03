import React from "react";

import { A } from "./styles/NavA";

function NavA(props: {
    children: React.ReactNode;
    href?: string;
    fontWeight?: number;
    margin_right?: number;
    font_size_mobile?: number;
}) {
    const { children, fontWeight, href, margin_right, font_size_mobile } =
        props;
    return (
        <A
            href={href}
            fontWeight={fontWeight}
            margin_right={margin_right}
            font_size_mobile={font_size_mobile}
        >
            {children}
        </A>
    );
}

export { NavA };
