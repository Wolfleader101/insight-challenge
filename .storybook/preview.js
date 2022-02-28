import { TemperatureUnitProvider } from "../hooks/useTemperatureUnit";
import { ThemeProvider } from "styled-components";
import StoryBooksGlobalStyle from "styles/StoryBooksGlobalStyle"; // just so it doesnt hard reset everything
import { theme } from "styles/theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <TemperatureUnitProvider>
      <ThemeProvider theme={theme}>
        <StoryBooksGlobalStyle />
        <Story />
      </ThemeProvider>
    </TemperatureUnitProvider>
  ),
];
