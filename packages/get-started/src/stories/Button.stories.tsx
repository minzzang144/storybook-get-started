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
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof Button> = () => (
    <Button primary label="Button"></Button>
);

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
