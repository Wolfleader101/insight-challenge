import DailyWidget from "components/DailyWidget";
import { WeatherPanelContainer } from "./styles";

const WeatherPanel = () => {
  return (
    <>
      <WeatherPanelContainer>
        <DailyWidget />
        <DailyWidget />
        <DailyWidget />
        <DailyWidget />
        <DailyWidget />
      </WeatherPanelContainer>
    </>
  );
};
export default WeatherPanel;
