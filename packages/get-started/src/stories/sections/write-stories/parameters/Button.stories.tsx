// Button.stories.js|ts|jsx|tsx

import { ComponentStory } from "@storybook/react";

import { Button } from "../../..//Button";

export default {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: "Write-Stories/Parameters",
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
};

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Story = Template.bind({});
Story.args = {
    primary: true,
    label: "Button",
};
Story.parameters = {
    backgrounds: {
        values: [
            { name: "red", value: "#f00" },
            { name: "green", value: "#0f0" },
            { name: "blue", value: "#00f" },
        ],
    },
};
