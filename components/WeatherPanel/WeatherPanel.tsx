import DailyWidget from "components/DailyWidget";
import SearchBar from "components/SearchBar";
import { Heading } from "components/Styled";
import TemperatureButton from "components/TemperatureButton";
import { useCallback, useEffect, useState } from "react";
import { GeoCoderData, DailyWeatherResponse, DailyWeatherData } from "types/types";
import { PanelContainer, PanelWidgetsContainer, PanelNavBar, PanelButtonsContainer } from "./styles";
import { TEMPERATURE_UNIT } from "hooks/useTemperatureUnit";

const WeatherPanel = () => {
  const [locationData, setLocationData] = useState<GeoCoderData>();
  const [weatherData, setWeatherData] = useState<DailyWeatherData[]>([]);

  const getWeatherData = useCallback(async () => {
    const API_KEY: string = process.env.NEXT_PUBLIC_OPENWEATHER ?? "";
    if (API_KEY == "") return;
    if (!locationData?.center) return;

    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${locationData?.center[1]}&lon=${locationData?.center[0]}&exclude=current,minutely,hourly,alerts&appid=${API_KEY}`
    );

    const data: DailyWeatherResponse = await res.json();

    data.daily = data.daily.slice(0, 5);
    setWeatherData(data.daily);
  }, [locationData?.center]);

  useEffect(() => {
    getWeatherData();
  }, [getWeatherData, locationData]);
  return (
    <>
      <PanelContainer>
        <PanelNavBar>
          <Heading>{locationData?.text ?? "Perth"}</Heading>
          <SearchBar setLocation={setLocationData} />
        </PanelNavBar>
        <PanelWidgetsContainer>
          {weatherData.map((el, i) => (
            <DailyWidget
              key={i}
              unixTime={el.dt}
              tempMin={el.temp.min}
              tempMax={el.temp.max}
              icon={el.weather[0].icon}
              description={el.weather[0].description}
            />
          ))}
        </PanelWidgetsContainer>
        <PanelButtonsContainer>
          <TemperatureButton tempUnit={TEMPERATURE_UNIT.CELCIUS} />
          <TemperatureButton tempUnit={TEMPERATURE_UNIT.FAHRENHEIT} />
        </PanelButtonsContainer>
      </PanelContainer>
    </>
  );
};
export default WeatherPanel;
