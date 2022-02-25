import {
  WidgetContainer,
  WidgetDay,
  WidgetDate,
  DateContainer,
  StyledRowBreak,
  ImportantWeatherContainer,
  WeatherContainer,
  SmallTemperature,
} from "./styles";

const DailyWidget = () => {
  return (
    <WidgetContainer>
      <DateContainer>
        <WidgetDay>Fri</WidgetDay>
        <WidgetDate>Feb 25th</WidgetDate>
      </DateContainer>
      <StyledRowBreak />
      <WeatherContainer>
        <SmallTemperature>27°</SmallTemperature>
        <ImportantWeatherContainer>
          <h2>29°</h2>
          <p>clear Sky</p>
        </ImportantWeatherContainer>
      </WeatherContainer>
    </WidgetContainer>
  );
};

export default DailyWidget;
