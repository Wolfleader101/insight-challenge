import { ColContainer, Container, RowContainer } from "components/Styled";
import styled from "styled-components";

export const WidgetContainer = styled(RowContainer)`
  justify-content: space-between;

  padding: 1rem 1.5rem;
  margin: 0.5rem 0;

  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: 8px 5px 15px 5px rgba(0, 0, 0, 0.1);
  width: 90%;
`;

export const DateContainer = styled(ColContainer)`
  align-items: flex-start;
`;

export const StyledRowBreak = styled.div`
  border-left: 1px solid ${(props) => props.theme.colors.accent};
  opacity: 30%;
  height: 100%;
  // hacky way to position it to the left
  margin-left: -5rem;
`;

export const WeatherContainer = styled(RowContainer)`
  justify-content: flex-end;
`;

export const SmallTemperature = styled.p`
  margin-bottom: 1rem;
`;

export const WeatherSummary = styled.p`
  font-size: 0.8rem;
  font-weight: 600;
`;
