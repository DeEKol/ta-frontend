import { createTheme } from "@mui/material";

import { LIGHT_COLOR, MAIN_BLACK, PRIMARY_MAIN_COLOR } from "@/theme/colors";

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
    MuiLink: {
      defaultProps: {
        color: MAIN_BLACK,
        style: {
          textDecoration: "none",
        },
      },
      styleOverrides: {
        root: {
          "&:hover": {
            color: LIGHT_COLOR,
          },
        },
      },
    },
  },
});
