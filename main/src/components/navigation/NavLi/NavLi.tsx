import React from "react";

import { Li } from "./styles/NavLi";

import { NavA } from "../NavA/NavA";

function NavLi(props: {
  children: React.ReactNode;
  href?: string;
  fontWeight?: number;
  font_size_mobile?: number;
}) {
  const { children, href, fontWeight, font_size_mobile } = props;

  return (
    <Li>
      <NavA
        href={href}
        fontWeight={fontWeight}
        font_size_mobile={font_size_mobile}
      >
        {children}
      </NavA>
    </Li>
  );
}

export { NavLi };
