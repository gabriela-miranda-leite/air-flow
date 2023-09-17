import { ThemeProvider } from "styled-components";

import theme from "./styles/theme";
import GlobalStyle from "./styles/globalStyles";
import image from "./assets/images/IconLogo.webp";

const App = () => {
  return (
    <ThemeProvider theme={{ theme }}>
      <GlobalStyle />
      <h1>oiaaa</h1>
      <img src={image} alt="aaa teste" />
    </ThemeProvider>
  );
};

export default App;
