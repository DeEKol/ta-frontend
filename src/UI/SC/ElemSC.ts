import { styled } from "@mui/material";

import { LIGHT_COLOR_TWO, MAIN_COLOR } from "@/theme/colors";

const ElemSC = styled("li")`
  background-color: ${LIGHT_COLOR_TWO};
  padding: 10px;
  margin-bottom: 15px;
  border: solid 1px ${MAIN_COLOR};
  border-radius: 10px;
`;

export default ElemSC;
