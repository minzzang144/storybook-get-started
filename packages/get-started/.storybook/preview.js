export const parameters = {
    backgrounds: {
        values: [
            { name: "red", value: "#f00" },
            { name: "green", value: "#0f0" },
        ],
    },
};

// All stories expect a theme arg
export const argTypes = {
    theme: { control: "select", options: ["light", "dark"] },
};

// The default value of the theme arg to all stories
export const args = { theme: "light" };
