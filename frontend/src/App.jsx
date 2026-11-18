import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme/theme";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";

function App() {
  return (
   <ThemeProvider theme={theme}>
    <CssBaseline/>
    <RouterProvider router={router} />
   </ThemeProvider>
  );
}

export default App;