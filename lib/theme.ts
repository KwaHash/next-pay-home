import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: `-apple-system, BlinkMacSystemFont, "Helvetica Neue", "Yu Gothic",
      Verdana, Meiryo, "M+ 1p", sans-serif`,
    allVariants: {
      color: "#484848", // Default text color
    },
  },
  palette: {
    text: {
      primary: "#484848", // Default primary text color
    },
  },
  components: {
    MuiSelect: {
      styleOverrides: {
        select: {
          padding: "10px", // Reset padding for select elements
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          padding: "10px", // Reset padding for outlined input elements
        },
      },
    },
  },
});

export default theme;
