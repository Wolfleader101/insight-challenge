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

export const PanelNavBar = styled(ColContainer)`
  width: 100%;
  padding: 2rem 3.5rem;

  flex-direction: column-reverse;

  @media (min-width: 481px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const PanelButtonsContainer = styled(RowContainer)`
  @media (min-width: 481px) {
    justify-content: flex-end;
    margin-right: 4rem;
    width: 100%;
  }
`;
