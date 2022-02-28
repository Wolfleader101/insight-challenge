import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SearchBar from "components/SearchBar";

export default {
  title: "Search Bar",
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = (args) => <SearchBar {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  setLocation: (value) => {
    return;
  },
};
