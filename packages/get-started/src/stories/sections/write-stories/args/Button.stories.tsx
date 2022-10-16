// Button.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "../../../Button";

export default {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: "Write-Stories/Args",
    component: Button,
    //👇 Creates specific argTypes
    argTypes: {
        backgroundColor: { control: "color" },
    },
    args: {
        //👇 Now all Button stories will be primary.
        primary: true,
    },
} as ComponentMeta<typeof Button>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const StoryArgs = Template.bind({});

StoryArgs.args = {
    primary: true,
    label: "Story args",
};
