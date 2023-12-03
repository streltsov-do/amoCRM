import React from "react";

import { A } from "./styles/NavA";

function NavA(props: {
    children: React.ReactNode;
    href?: string;
    fontWeight?: number;
    margin_right?: number;
}) {
    const { children, fontWeight, href, margin_right } = props;
    return (
        <A
            href={href}
            fontWeight={fontWeight}
            margin_right={margin_right}
        >
            {children}
        </A>
    );
}

export { NavA };
