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
import { useEffect, useState } from "react";

const DailyWidget = () => {
  const [showIcon, setShowIcon] = useState(false);
  const { width } = useWindowSize();

  useEffect(() => {
    if (width >= 481) {
      setShowIcon(true);
    } else {
      setShowIcon(false);
    }
  }, [width]);

  return (
    <WidgetContainer>
      <DateContainer>
        <h3>Fri</h3>
        <p>Feb 25th</p>
      </DateContainer>
      <StyledBreak />
      <WeatherContainer>
        <TemperatureContainer>
          <SmallTemperature>27°</SmallTemperature>
          <BigTemperature>29°</BigTemperature>
        </TemperatureContainer>
        <WeatherSummaryContainer>
          {showIcon ? <BsCloudSunFill size="2.5rem" /> : null}
          <WeatherSummary>clear Sky</WeatherSummary>
        </WeatherSummaryContainer>
      </WeatherContainer>
    </WidgetContainer>
  );
};

export default DailyWidget;
