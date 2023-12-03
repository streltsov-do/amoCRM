import React from "react";
import { Div, Absolute, Absolute1, Absolute2 } from "./styles/MainDiv";

import purple_ball from "./assets/images/purple_ball.png";
import red_ball_big from "./assets/images/red_ball_big.png";
import red_ball_small from "./assets/images/red_ball_small.png";
import purple_light from "./assets/images/purple_light.png";
import red_light from "./assets/images/red_light.svg";

const MainDiv = (props: { children?: React.ReactNode }) => {
    const { children } = props;
    return (
        <Div>
            {children}
            <Absolute src={purple_ball} alt="purple_ball" top={2} left={868} />
            {/* <Absolute2 src={purple_light} /> */}
            <Absolute
                src={red_ball_big}
                alt="red_ball_big"
                top={83}
                left={519}
            />
            <Absolute
                src={red_ball_small}
                alt="red_ball_small"
                top={547}
                left={851}
            />
            <Absolute1
                top={251}
                left={-102}
            />
            <Absolute2
                top={-154}
                left={602}
            />
            {/* <Absolute src={purple_light} alt="purple_light" top={-154} left={602} />
            <Absolute src={red_light} alt="red_light" top={251} left={-102} /> */}
        </Div>
    );
};

export { MainDiv };
