import styled from "styled-components/macro";

import { MOBILE_WIDTH_BREAKPOINT } from "../../../utils/constants";

const Container = styled.div`
  max-width: 1140px;
  height: 73px;
  display: flex;

  @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
    max-width: 320px;
    height: 55px;
    flex-shrink: 0;
  }
`;

const LogoDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
    display: none;
  }
`;

const LogoSvg = styled.div`
  display: flex;
  width: 140px;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const Logo1 = styled.img`
  width: 35px;
  height: 24px;
`;
const Logo2 = styled.img`
  width: 97px;
  height: 15px;
`;

const LogoDesc = styled.div`
  width: 165px;
  color: #e4e5ea;
  font-family: Montserrat;
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;
const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${1140 - 192}px;
  min-width: auto;
  margin-top: 15px;
  margin-left: 52px;
  position: relative;

  @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
    margin-top: 20px;
    margin-left: 2px;
  }
`;
const NavUl = styled.ul`
  display: flex;
  gap: 30px;
  color: var(--light-text, #e4e5ea);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  list-style-type: none;
  margin-right: 10px;
  @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
    gap: unset;
    margin-right: 0;
    justify-content: space-between;
    width: ${320 - 16 * 2}px;
  }
`;

const Messengers = styled.div`
  display: flex;
  gap: 30px;
  @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
    display: none;
  }
`;

export {
  Container,
  LogoDiv,
  LogoSvg,
  Logo1,
  Logo2,
  LogoDesc,
  NavUl,
  Messengers,
  Nav,
};
