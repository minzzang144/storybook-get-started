import React from "react";
import { Task } from "./Task";

export default {
    component: Task,
    title: "Task",
    argTypes: {
        onArchiveTask: { action: "onArchiveTask" },
        onTogglePinTask: { action: "onTogglePinTask" },
        onEditTitle: { action: "onEditTitle" },
    },
};

const Template = (args) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
    task: {
        id: "1",
        title: "Buy milk",
        state: "TASK_INBOX",
    },
};

export const Pinned = Template.bind({});
Pinned.args = {
    task: {
        id: "2",
        title: "QA dropdown",
        state: "TASK_PINNED",
    },
};

export const Archived = Template.bind({});
Archived.args = {
    task: {
        id: "3",
        title: "Write schema for account menu",
        state: "TASK_ARCHIVED",
    },
};
