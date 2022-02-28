import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import DailyWidget from "../components/DailyWidget";

export default {
  title: "Daily Widget",
  component: DailyWidget,
  argTypes: {
    icon: { control: { type: "select", options: ["01d", "02d", "03d", "04d", "09d", "10d", "11d", "13d", "50d"] } },
  },
} as ComponentMeta<typeof DailyWidget>;

const Template: ComponentStory<typeof DailyWidget> = (args) => <DailyWidget {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  unixTime: 1646366400,
  tempMin: 290.33,
  tempMax: 300.29,
  icon: "01d",
  description: "clear sky",
};
