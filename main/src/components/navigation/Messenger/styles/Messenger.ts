import styled from "styled-components/macro";

import { MOBILE_WIDTH_BREAKPOINT } from "../../../../utils/constants";

const MessengerImg = styled.img`
    width: 20px;
    height: 20px;
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        width: 24px;
        height: 24px;
    }
`;

export { MessengerImg };
