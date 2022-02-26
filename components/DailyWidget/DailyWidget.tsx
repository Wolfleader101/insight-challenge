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
          <h2>29°</h2>
        </TemperatureContainer>
        <WeatherSummaryContainer>
          {showIcon ? <BsCloudSunFill size="2rem" /> : null}
          <WeatherSummary>clear Sky</WeatherSummary>
        </WeatherSummaryContainer>
      </WeatherContainer>
    </WidgetContainer>
  );
};

export default DailyWidget;
