import { ColContainer } from "components/Styled";
import { WidgetContainer, DateContainer, StyledBreak, WeatherContainer, BigWeahterContainer, SmallTemperature, WeatherSummary } from "./styles";

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
        <SmallTemperature>27°</SmallTemperature>
        <BigWeahterContainer>
          <h2>29°</h2>
          {showIcon ? <BsCloudSunFill size="2rem" /> : null}
          <WeatherSummary>clear Sky</WeatherSummary>
        </BigWeahterContainer>
      </WeatherContainer>
    </WidgetContainer>
  );
};

export default DailyWidget;
