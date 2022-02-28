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
import { WeatherIconType } from "types/types";
import { dateSuffix } from "utils";
import { TEMPERATURE_UNIT, useTemperatureUnit } from "hooks/useTemperatureUnit";
import WeatherIcon from "components/WeatherIcon";

type Props = {
  // data: DailyWeatherData;
  unixTime: number;
  tempMin: number;
  tempMax: number;
  icon: WeatherIconType;
  description: string;
};
const DailyWidget = ({ unixTime, tempMin, tempMax, icon, description }: Props) => {
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
      setMinTemp(calculateCelcius(tempMin).toFixed(0));
      setMaxTemp(calculateCelcius(tempMax).toFixed(0));
    } else {
      setMinTemp(calculateFahrenheit(tempMin).toFixed(0));
      setMaxTemp(calculateFahrenheit(tempMax).toFixed(0));
    }
  }, [unit, calculateCelcius, tempMin, tempMax, calculateFahrenheit]);

  useEffect(() => {
    if (width >= 481) {
      setShowIcon(true);
    } else {
      setShowIcon(false);
    }
  }, [width]);

  useEffect(() => {
    // get it as millis for js
    const newDate = new Date(unixTime * 1000);

    setDay(newDate.toLocaleString("default", { weekday: "short" }));
    setMonth(newDate.toLocaleString("default", { month: "short" }));
    setDate(newDate.toLocaleString("default", { day: "numeric" }));
  }, [unixTime]);

  useEffect(() => {
    calculateTemp();
  }, [tempMin, tempMax, calculateTemp]);

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
          {showIcon ? <WeatherIcon iconId={icon} /> : null}
          <WeatherSummary>{description}</WeatherSummary>
        </WeatherSummaryContainer>
      </WeatherContainer>
    </WidgetContainer>
  );
};

export default DailyWidget;
