import { ThemeProvider } from "styled-components";

import theme from "./styles/theme";
import GlobalStyle from "./styles/globalStyles";

import { WelcomeAccount } from "./pages";

const App = () => {
  return (
    <ThemeProvider theme={{ theme }}>
      <GlobalStyle />
      <WelcomeAccount />
    </ThemeProvider>
  );
};

export default App;
