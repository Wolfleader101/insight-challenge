import { ColContainer, Container, RowContainer } from "components/Styled";
import styled from "styled-components";

export const PanelContainer = styled(ColContainer)`
  background: ${(props) => props.theme.colors.background};
  border-radius: ${(props) => props.theme.borderRadius};

  width: 90%;
  height: 75%;

  @media (max-width: 480px) {
    margin: 2rem;
    height: 100%;
  }
`;

export const PanelWidgetsContainer = styled(Container)`
  width: 100%;
  height: 100%;

  @media (min-width: 481px) {
    flex-direction: row;
    justify-content: space-evenly;
    align-self: center;
  }
`;

export const PanelNavBar = styled(RowContainer)`
  width: 100%;
  padding: 2rem 1rem;
  justify-content: space-between;
`;
