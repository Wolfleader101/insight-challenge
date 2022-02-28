import React, { useState, useContext, createContext } from "react";

export enum TEMPERATURE_UNIT {
  CELCIUS,
  FAHRENHEIT,
}

export type TemperatureUnitContextType = {
  unit: TEMPERATURE_UNIT;
  setUnit: (value: React.SetStateAction<TEMPERATURE_UNIT>) => void;
};

const TemperatureUnitContext = createContext<TemperatureUnitContextType | undefined>(undefined);

type Props = {
  children: React.ReactNode;
};

const TemperatureUnitProvider = ({ children }: Props) => {
  const [unit, setUnit] = useState<TEMPERATURE_UNIT>(0);

  return <TemperatureUnitContext.Provider value={{ unit, setUnit }}>{children}</TemperatureUnitContext.Provider>;
};

const useTemperatureUnit = () => {
  const context = useContext(TemperatureUnitContext);
  if (context === undefined) {
    throw new Error("useTemperatureUnit can only be used inside TemperatureUnitProvider");
  }

  return context;
};

export { TemperatureUnitProvider, useTemperatureUnit };
