import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import WeatherPanel from "components/WeatherPanel";

export default {
  title: "Weather Panel",
  component: WeatherPanel,
} as ComponentMeta<typeof WeatherPanel>;

const Template: ComponentStory<typeof WeatherPanel> = (args) => <WeatherPanel />;
export const Primary = Template.bind({});
