import { ThemeProvider } from "styled-components";

import theme from "./styles/theme";
import GlobalStyle from "./styles/globalStyles";

import {Routes } from "./routes";
import { WelcomeAccount } from "./pages";

const App = () => {
  return (
    <ThemeProvider theme={{ theme }}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
