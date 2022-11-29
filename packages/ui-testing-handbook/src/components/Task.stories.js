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
