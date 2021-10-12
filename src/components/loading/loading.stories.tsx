import { Meta, Story } from "@storybook/react";
import { ComponentProps } from "react";
import { Loading } from "./loading";

export default {
    title: "Loading",
    component: Loading
} as Meta;

const Template: Story<ComponentProps<typeof Loading>> = (args) => <Loading {...args} />;

export const FirstStory = Template.bind({});
FirstStory.args = {
    message: "Hello World"
};

