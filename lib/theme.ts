import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: `-apple-system, BlinkMacSystemFont, "Helvetica Neue", "Yu Gothic",
      Verdana, Meiryo, "M+ 1p", sans-serif`,
    allVariants: {
      color: "#686868", // Default text color
    },
  },
  palette: {
    text: {
      primary: "#686868", // Default primary text color
    },
  },
});

export default theme;
