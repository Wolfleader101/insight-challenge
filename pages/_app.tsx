import { TemperatureUnitProvider } from "hooks/useTemperatureUnit";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/globalStyle";
import { theme } from "styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TemperatureUnitProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </TemperatureUnitProvider>
  );
}

export default MyApp;
