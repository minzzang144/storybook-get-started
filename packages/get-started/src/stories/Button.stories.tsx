// Button.stories.ts|tsx

import React, { useState } from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";

export default {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: "Button",
    component: Button,
    //👇 Creates specific parameters for the story
    parameters: {
        backgrounds: {
            values: [
                { name: "red", value: "#f00" },
                { name: "green", value: "#0f0" },
                { name: "blue", value: "#00f" },
            ],
        },
    },
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof Button> = () => (
    <Button primary label="Button"></Button>
);

Primary.parameters = {
    backgrounds: {
        values: [
            { name: "red", value: "#f00" },
            { name: "green", value: "#0f0" },
        ],
    },
};

export const Secondary = () => {
    // Sets the hooks for both the label and primary props
    const [value, setValue] = useState("Secondary");
    const [isPrimary, setIsPrimary] = useState(false);

    // Sets a click handler to change the label's value
    const handleOnChange = () => {
        if (!isPrimary) {
            setIsPrimary(true);
            setValue("Primary");
        }
    };
    return (
        <Button primary={isPrimary} onClick={handleOnChange} label={value} />
    );
};

export const Tertiary = () => <Button primary label="Button" />;
Tertiary.storyName = "I am the tertiary";

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

// 👇 Each story then reuses that template
export const One = Template.bind({});
One.args = { backgroundColor: "#ff0", label: "Button" };

export const Two = Template.bind({});
Two.args = { ...One.args, label: "😄👍😍💯" };

export const Three = Template.bind({});
Three.args = { ...One.args, label: "📚📕📈🤓" };
