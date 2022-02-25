import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    colors: {
      background: string;
      backgroundDark: string;
      accent: string;
    };
  }
}
