import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { Button } from "@mirage/core";

export default {
  title: "Components/Button",
  component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args}>Button</Button>;

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
