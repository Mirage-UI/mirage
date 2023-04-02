import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { B } from "@mirage/core";

export default {
  title: "Components/B",
  component: B,
} as Meta<typeof B>;

const Template: StoryFn<typeof B> = (args) => <B {...args}>B</B>;

export const Primary = Template.bind({});
Primary.args = {
  variant: "default",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
};

export const Danger = Template.bind({});
Danger.args = {
  variant: "danger",
};
