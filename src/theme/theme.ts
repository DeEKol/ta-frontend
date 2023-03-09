import { createTheme } from "@mui/material";

import { PRIMARY_MAIN_COLOR } from "@/theme/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: PRIMARY_MAIN_COLOR,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
    },
  },
});
