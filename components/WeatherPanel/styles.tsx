import { Container } from "components/Styled";
import styled from "styled-components";

export const WeatherPanelContainer = styled(Container)`
  background: ${(props) => props.theme.colors.background};
  border-radius: ${(props) => props.theme.borderRadius};

  width: 90%;
  height: 75%;
  @media (max-width: 480px) {
    margin: 2rem;
    height: 100%;
  }

  @media (min-width: 481px) {
    flex-direction: row;
    justify-content: space-evenly;
    align-self: center;
  }
`;
