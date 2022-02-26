import DailyWidget from "components/DailyWidget";
import SearchBar from "components/SearchBar";
import { Heading } from "components/Styled";
import { PanelContainer, PanelWidgetsContainer, PanelNavBar } from "./styles";

const WeatherPanel = () => {
  return (
    <>
      <PanelContainer>
        <PanelNavBar>
          <Heading>Perth</Heading>
          <SearchBar />
        </PanelNavBar>
        <PanelWidgetsContainer>
          <DailyWidget />
          <DailyWidget />
          <DailyWidget />
          <DailyWidget />
          <DailyWidget />
        </PanelWidgetsContainer>
      </PanelContainer>
    </>
  );
};
export default WeatherPanel;
