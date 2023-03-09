import React from "react";
import { styled } from "@mui/material";

import { MAIN_COLOR, SECONDARY_COLOR } from "@/theme/colors";
import PageContainerSC from "@/UI/SC/PageContainerSC";

const Footer = () => {
  return (
    <FooterSC>
      <PageContainerSC>
        <WrapperSC>
          <ParagraphSC>Copyright © 2023</ParagraphSC>
        </WrapperSC>
      </PageContainerSC>
    </FooterSC>
  );
};

const FooterSC = styled("footer")`
  padding: 20px 0;
  background-color: ${MAIN_COLOR};
  border-top: 1px solid ${SECONDARY_COLOR};
`;

const WrapperSC = styled("div")`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const ParagraphSC = styled("p")`
  text-align: center;
  white-space: pre-wrap;
  color: #000000;
  & > span {
    color: ${SECONDARY_COLOR};
  }
`;

export default React.memo(Footer);
