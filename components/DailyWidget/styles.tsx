import { ColContainer, Container, RowContainer } from "components/Styled";
import styled from "styled-components";

export const WidgetContainer = styled(RowContainer)`
  justify-content: space-between;

  padding: 1rem 1.5rem;
  margin: 0.5rem 0;

  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: 8px 5px 15px 5px rgba(0, 0, 0, 0.1);
  width: 90%;

  @media (min-width: 481px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    max-width: 15%;
    max-height: 40%;
    height: 40%;
    padding: 0;
    margin: 0;
  }
`;

export const DateContainer = styled(ColContainer)`
  align-items: flex-start;

  @media (min-width: 481px) {
    align-items: center;
    padding-top: 0.5rem;
  }
`;

export const StyledBreak = styled.div`
  opacity: 30%;

  @media (max-width: 480px) {
    height: 100%;
    border-left: 1px solid ${(props) => props.theme.colors.accent};
    // hacky way to position it to the left
    margin-left: -5rem;
  }

  @media (min-width: 481px) {
    width: 75%;
    border-top: 1px solid ${(props) => props.theme.colors.accent};
    margin: 1rem 0;
  }
`;

export const WeatherContainer = styled(ColContainer)`
  align-items: flex-end;
  justify-content: space-evenly;

  @media (min-width: 481px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 100%;
  }
`;

export const TemperatureContainer = styled(RowContainer)`
  align-items: flex-end;
`;

export const WeatherSummaryContainer = styled(ColContainer)`
  @media (min-width: 481px) {
    flex-direction: column;
    align-items: center;

    height: 100%;
    justify-content: space-around;
  }
`;

export const SmallTemperature = styled.p`
  font-size: 1.25rem;
  @media (max-width: 480px) {
    margin-top: 0.5rem;
    margin-right: 0.5rem;
  }
`;

export const BigTemperature = styled.h2`
  font-size: 1.75rem;
  margin-left: 0.5rem;
`;

export const WeatherSummary = styled.p`
  font-size: 0.8rem;
  font-weight: 600;

  @media (min-width: 481px) {
    font-size: 0.9rem;
  }
`;
