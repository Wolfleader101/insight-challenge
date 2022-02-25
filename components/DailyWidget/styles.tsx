import { Container } from "components/Styled";
import styled from "styled-components";

export const WidgetContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 1rem 1.5rem;
  margin: 0.5rem 0;

  border-radius: ${(props) => props.theme.borderRadius};
  /* box-shadow: 15px 15px 10px -3px rgba(0, 0, 0, 0.1); */
  box-shadow: 8px 5px 15px 5px rgba(0, 0, 0, 0.1);
  width: 90%;
`;

export const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WidgetDay = styled.h3`
  font-weight: bold;
`;
export const WidgetDate = styled.p`
  font-weight: 400;
`;

export const StyledRowBreak = styled.div`
  border-left: 1px solid ${(props) => props.theme.colors.accent};
  opacity: 30%;
  height: 100%;
  // hacky way to position it to the left
  margin-left: -5rem;
`;

export const WeatherContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const SmallTemperature = styled.p`
  margin-bottom: 1rem;
`;

export const WeatherSummary = styled.p`
  font-size: 0.8rem;
  font-weight: 600;
`;

export const ImportantWeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  text-align: center;
`;
