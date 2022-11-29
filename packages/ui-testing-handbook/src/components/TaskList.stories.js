import React from "react";
import { TaskList } from "./TaskList";
import Task from "./Task.stories";

export default {
    component: TaskList,
    title: "TaskList",
    argTypes: {
        ...Task.argTypes,
    },
};
const Template = (args) => <TaskList {...args} />;

export const Default = Template.bind({});
Default.args = {
    tasks: [
        { id: "1", state: "TASK_INBOX", title: "Build a date picker" },
        { id: "2", state: "TASK_INBOX", title: "QA dropdown" },
        {
            id: "3",
            state: "TASK_INBOX",
            title: "Write a schema for account avatar component",
        },
        { id: "4", state: "TASK_INBOX", title: "Export logo" },
        { id: "5", state: "TASK_INBOX", title: "Fix bug in input error state" },
        {
            id: "6",
            state: "TASK_INBOX",
            title: "Draft monthly blog to customers",
        },
    ],
};
