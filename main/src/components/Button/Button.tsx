import React from "react";
import { Container } from "./styles/Button";

function Button(props: {
    width?: number;
    height?: number;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    children: React.ReactNode;
}) {
    const { width, height, onClick, children } = props;
    return (
        <Container width={width} height={height} onClick={onClick}>
            {children}
        </Container>
    );
}

export { Button };
