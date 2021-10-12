import { Meta, Story } from "@storybook/react";
import { ComponentProps } from "react";
import { InputLatencyNameValue } from "./inputLatencyNameValue";

export default {
    title: "inputLatencyNameValue",
    component: InputLatencyNameValue
} as Meta;

const Template: Story<ComponentProps<typeof InputLatencyNameValue>> = (args) => <InputLatencyNameValue {...args} />;

export const FirstStory = Template.bind({});
FirstStory.args = {
    inputData: {
        "Min Measured Latency (in ms)": 0.2,
        "Max Measured Latency (in ms)": 0.7,
        "Average Measured Latency (in ms)": 0.5
    },
    maxLatency: 1
}

