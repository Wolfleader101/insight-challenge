import { ColContainer } from "components/Styled";
import { WidgetContainer, DateContainer, StyledRowBreak, WeatherContainer, SmallTemperature, WeatherSummary } from "./styles";

const DailyWidget = () => {
  return (
    <WidgetContainer>
      <DateContainer>
        <h3>Fri</h3>
        <p>Feb 25th</p>
      </DateContainer>
      <StyledRowBreak />
      <WeatherContainer>
        <SmallTemperature>27°</SmallTemperature>
        <ColContainer>
          <h2>29°</h2>
          <WeatherSummary>clear Sky</WeatherSummary>
        </ColContainer>
      </WeatherContainer>
    </WidgetContainer>
  );
};

export default DailyWidget;
