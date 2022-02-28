import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import WeatherIcon from "components/WeatherIcon";

export default {
  title: "Weather Icon",
  component: WeatherIcon,
  argTypes: {
    iconId: { control: { type: "select", options: ["01d", "02d", "03d", "04d", "09d", "10d", "11d", "13d", "50d"] } },
  },
} as ComponentMeta<typeof WeatherIcon>;

const Template: ComponentStory<typeof WeatherIcon> = (args) => <WeatherIcon {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  iconId: "01d",
};
