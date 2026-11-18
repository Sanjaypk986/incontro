import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#111318",
      paper: "#191C22",
    },
    primary: {
      main: "#5B8DEF",
    },
    text: {
      primary: "#E6E8EC",
      secondary: "#9299A5",
    },
    divider: "#292D35",
  },

  typography: {
    fontFamily: "'Inter', sans-serif",
  },

  shape: {
    borderRadius: 10,
  },
});

export default theme;