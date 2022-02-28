import DailyWidget from "components/DailyWidget";
import SearchBar from "components/SearchBar";
import { Heading } from "components/Styled";
import { useCallback, useEffect, useState } from "react";
import { GeoCoderData, DailyWeatherResponse, DailyWeatherData } from "types/types";
import { PanelContainer, PanelWidgetsContainer, PanelNavBar } from "./styles";

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
            <DailyWidget key={i} data={el} />
          ))}
          {/* <DailyWidget />
          <DailyWidget />
          <DailyWidget />
          <DailyWidget />
          <DailyWidget /> */}
        </PanelWidgetsContainer>
      </PanelContainer>
    </>
  );
};
export default WeatherPanel;
