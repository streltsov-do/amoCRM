import React from "react";
import { useMediaQuery } from "react-responsive";
import { Div, Absolute, PurpleLight, RedLight } from "./styles/Body";
import { MOBILE_WIDTH_BREAKPOINT } from "../../utils/constants";

import purple_ball from "./assets/images/purple_ball.png";
import red_ball_big from "./assets/images/red_ball_big.png";
import red_ball_small from "./assets/images/red_ball_small.png";
import purple_light from "./assets/images/purple_light.png";
import red_light from "./assets/images/red_light.svg";

const Body = (props: { children?: React.ReactNode }) => {
  const { children } = props;
  const isMobile = useMediaQuery({ maxWidth: MOBILE_WIDTH_BREAKPOINT });
  return (
    <Div>
      {children}
      <Absolute
        src={purple_ball}
        alt="purple_ball"
        top={isMobile ? 236 + 55 : 2}
        left={isMobile ? 296 : 868}
        $width={isMobile ? "40px" : ""}
        $height={isMobile ? "40px" : ""}
      />
      {/* <RedLight src={purple_light} /> */}
      {!isMobile && (
        <Absolute src={red_ball_big} alt="red_ball_big" top={83} left={519} />
      )}
      <Absolute
        src={red_ball_small}
        alt="red_ball_small"
        top={isMobile ? 402 + 55 : 547}
        left={isMobile ? 29 : 851}
        // $width={isMobile?"43px":""}
        // $height={isMobile?"43px":""}
      />
      <PurpleLight top={251} left={-102}>
        <img
          src={purple_light}
          alt="purple_light"
          width="211px"
          height="211px"
        ></img>
      </PurpleLight>
      <RedLight top={isMobile ? 241 + 55 : -154} left={isMobile ? -55 : 602}>
        <img
          src={red_light}
          alt="purple_light"
          width="259px"
          height="259px"
        ></img>
      </RedLight>
      {/* <Absolute src={purple_light} alt="purple_light" top={-154} left={602} />
            <Absolute src={red_light} alt="red_light" top={251} left={-102} /> */}
    </Div>
  );
};

export { Body };
