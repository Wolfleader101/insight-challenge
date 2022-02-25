import { Container } from "components/Styled";
import styled from "styled-components";

export const WeatherContainer = styled(Container)`
  background: ${(props) => props.theme.colors.background};
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 2rem;
  margin: 2rem;
`;
