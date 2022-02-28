import { TEMPERATURE_UNIT, useTemperatureUnit } from "hooks/useTemperatureUnit";
import React, { useEffect, useState } from "react";
import { StyledTempButton } from "./styles";

type Props = {
  tempUnit: TEMPERATURE_UNIT;
};

const TemperatureButton = ({ tempUnit }: Props) => {
  const { unit, setUnit } = useTemperatureUnit();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(tempUnit == unit);
  }, [tempUnit, unit]);

  const onClick = (e: React.SyntheticEvent) => {
    setUnit(tempUnit);
  };
  return (
    <>
      <StyledTempButton isActive={isActive} onClick={onClick}>
        °{tempUnit == TEMPERATURE_UNIT.CELCIUS ? "C" : "F"}
      </StyledTempButton>
    </>
  );
};

export default TemperatureButton;
