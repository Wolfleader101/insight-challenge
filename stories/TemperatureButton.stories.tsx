import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TemperatureButton from "components/TemperatureButton";
import { TEMPERATURE_UNIT } from "hooks/useTemperatureUnit";

export default {
  title: "Temperature Button",
  component: TemperatureButton,
  icon: { control: { type: "select", options: [TEMPERATURE_UNIT.CELCIUS, TEMPERATURE_UNIT.FAHRENHEIT] } },
} as ComponentMeta<typeof TemperatureButton>;

const Template: ComponentStory<typeof TemperatureButton> = (args) => <TemperatureButton {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  tempUnit: 0,
};
