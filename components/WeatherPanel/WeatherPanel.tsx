import DailyWidget from "components/DailyWidget";
import { WeatherContainer } from "./styles";

const WeatherPanel = () => {
  return (
    <>
      <WeatherContainer>
        <DailyWidget />
        <DailyWidget />
        <DailyWidget />
        <DailyWidget />
        <DailyWidget />
      </WeatherContainer>
    </>
  );
};
export default WeatherPanel;
