import React from "react";

import { GlobalStyle } from "../src/shared/global";

/*
 * Global decorator to apply the styles to all stories
 * Read more about them at:
 * https://storybook.js.org/docs/react/writing-stories/decorators#global-decorators
 */
export const decorators = [
    (Story) => (
        <>
            <GlobalStyle />
            <Story />
        </>
    ),
];

/*
 * Read more about global parameters at:
 * https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
 */
export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    // Storybook a11y addon configuration
    a11y: {
        // the target DOM element
        element: "#root",
        // sets the execution mode for the addon
        manual: false,
    },
};
