import React from "react";
import { styled } from "@mui/material";

import TruckIcon from "@/assets/icons/TruckIcon.svg";
import { MAIN_COLOR, SECONDARY_COLOR } from "@/theme/colors";
import PageContainerSC from "@/UI/SC/PageContainerSC";

const Header = () => {
  return (
    <HeaderSC>
      <PageContainerSC>
        <WrapperSC>
          <TruckIconSC />
        </WrapperSC>
      </PageContainerSC>
    </HeaderSC>
  );
};

const HeaderSC = styled("header")`
  position: sticky;
  top: 0;
  z-index: 1;
  padding: 10px 0;
  background-color: ${MAIN_COLOR};
  border-bottom: 1px solid ${SECONDARY_COLOR};
`;

const WrapperSC = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TruckIconSC = styled(TruckIcon)`
  height: 40px;
`;

export default React.memo(Header);
