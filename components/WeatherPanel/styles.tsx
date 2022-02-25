import { Container } from "components/Styled";
import styled from "styled-components";

export const WeatherContainer = styled(Container)`
  background: ${(props) => props.theme.colors.background};
  border-radius: ${(props) => props.theme.borderRadius};
  width: 90%;
  height: 100%;
  justify-content: center;

  margin: 2rem;
`;
