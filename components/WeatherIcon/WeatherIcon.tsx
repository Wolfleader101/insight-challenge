import { useEffect } from "react";
import {
  BsFillBrightnessHighFill,
  BsFillCloudSunFill,
  BsFillCloudFill,
  BsFillCloudsFill,
  BsCloudRainFill,
  BsCloudRainHeavyFill,
  BsCloudLightningFill,
  BsSnow,
  BsFillCloudHaze2Fill,
} from "react-icons/bs";

type Props = {
  iconId: string;
};
const WeatherIcon = ({ iconId }: Props) => {
  switch (iconId) {
    case "01d":
      return <BsFillBrightnessHighFill size="2.5rem" />;
    case "02d":
      return <BsFillCloudSunFill size="2.5rem" />;
    case "03d":
      return <BsFillCloudFill size="2.5rem" />;
    case "04d":
      return <BsFillCloudsFill size="2.5rem" />;
    case "09d":
      return <BsCloudRainFill size="2.5rem" />;
    case "10d":
      return <BsCloudRainHeavyFill size="2.5rem" />;
    case "11d":
      return <BsCloudLightningFill size="2.5rem" />;
    case "13d":
      return <BsSnow size="2.5rem" />;
    case "50d":
      return <BsFillCloudHaze2Fill size="2.5rem" />;

    default:
      return null;
  }
};

export default WeatherIcon;
