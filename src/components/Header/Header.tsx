import React from "react";
import { Link, styled } from "@mui/material";

import TruckIcon from "@/assets/icons/TruckIcon.svg";
import { headersData } from "@/lib/constants/header";
import { MAIN_COLOR, SECONDARY_COLOR } from "@/theme/colors";
import PageContainerSC from "@/UI/SC/PageContainerSC";

const Header = () => {
  return (
    <HeaderSC>
      <PageContainerSC>
        <WrapperSC>
          <HeaderNavSC>
            <HeaderNavListSC>
              <li>
                <TruckIconSC />
              </li>
              {headersData
                .filter((elem) => elem.id != 1)
                .map((elem) => (
                  <li key={elem.id}>
                    <Link href={elem.href}>{elem.title}</Link>
                  </li>
                ))}
            </HeaderNavListSC>
          </HeaderNavSC>
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

const HeaderNavListSC = styled("ul")`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderNavSC = styled("nav")`
  width: 100%;
`;

export default React.memo(Header);
