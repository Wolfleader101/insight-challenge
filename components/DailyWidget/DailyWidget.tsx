import { ColContainer } from "components/Styled";
import {
  WidgetContainer,
  DateContainer,
  StyledBreak,
  WeatherContainer,
  WeatherSummaryContainer,
  TemperatureContainer,
  SmallTemperature,
  WeatherSummary,
  BigTemperature,
} from "./styles";

import { BsCloudSunFill } from "react-icons/bs";
import useWindowSize from "hooks/useWindowSize";
import { useCallback, useEffect, useState } from "react";
import { DailyWeatherData } from "types/types";
import { dateSuffix } from "utils";
import { TEMPERATURE_UNIT, useTemperatureUnit } from "hooks/useTemperatureUnit";
import WeatherIcon from "components/WeatherIcon";

type Props = {
  data: DailyWeatherData;
};
const DailyWidget = ({ data }: Props) => {
  const [showIcon, setShowIcon] = useState(false);
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [date, setDate] = useState("");
  const [minTemp, setMinTemp] = useState("");
  const [maxTemp, setMaxTemp] = useState("");
  const { width } = useWindowSize();

  const { unit } = useTemperatureUnit();

  const calculateFahrenheit = useCallback((kelvin: number) => {
    return (kelvin - 273.15) * (9 / 5) + 32;
  }, []);

  const calculateCelcius = useCallback((kelvin: number) => {
    return kelvin - 273.15;
  }, []);

  const calculateTemp = useCallback(() => {
    if (unit == TEMPERATURE_UNIT.CELCIUS) {
      setMinTemp(calculateCelcius(data.temp.min).toFixed(0));
      setMaxTemp(calculateCelcius(data.temp.max).toFixed(0));
    } else {
      setMinTemp(calculateFahrenheit(data.temp.min).toFixed(0));
      setMaxTemp(calculateFahrenheit(data.temp.max).toFixed(0));
    }
  }, [unit, calculateCelcius, data.temp.min, data.temp.max, calculateFahrenheit]);

  useEffect(() => {
    if (width >= 481) {
      setShowIcon(true);
    } else {
      setShowIcon(false);
    }
  }, [width]);

  useEffect(() => {
    // get it as millis for js
    const newDate = new Date(data.dt * 1000);

    setDay(newDate.toLocaleString("default", { weekday: "short" }));
    setMonth(newDate.toLocaleString("default", { month: "short" }));
    setDate(newDate.toLocaleString("default", { day: "numeric" }));
  }, [data.dt]);

  useEffect(() => {
    calculateTemp();
  }, [data.temp.min, data.temp.max, calculateTemp]);

  return (
    <WidgetContainer>
      <DateContainer>
        <h3>{day}</h3>
        <p>
          {month} {date}
          {dateSuffix(parseInt(date))}
        </p>
      </DateContainer>
      <StyledBreak />
      <WeatherContainer>
        <TemperatureContainer>
          <SmallTemperature>{minTemp}°</SmallTemperature>
          <BigTemperature>{maxTemp}°</BigTemperature>
        </TemperatureContainer>
        <WeatherSummaryContainer>
          {showIcon ? <WeatherIcon iconId={data.weather[0].icon} /> : null}
          <WeatherSummary>{data.weather[0].description}</WeatherSummary>
        </WeatherSummaryContainer>
      </WeatherContainer>
    </WidgetContainer>
  );
};

export default DailyWidget;
