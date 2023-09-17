import { ThemeProvider } from "styled-components";

import theme from "./styles/theme";
import GlobalStyle from "./styles/globalStyles";

import { SocialMediaButton } from "./components";

const App = () => {
  return (
    <ThemeProvider theme={{ theme }}>
      <GlobalStyle />
      <SocialMediaButton type="SignIn" />
      <SocialMediaButton type="Login" />
    </ThemeProvider>
  );
};

export default App;
