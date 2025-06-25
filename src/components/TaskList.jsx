const TaskList = () => {
    let tasks = [
        { taskName: "Declare Bankruptcy", completed: true },
        { taskName: "Get Government Buyout", completed: false },
        { taskName: "Get rich again!", completed: false }
    ];

return (
    tasks.map((task, index) => <li key={index} style={task.completed ? {color: "green"} : {color: "black"}}>{task.taskName} {task.completed ? "\u2705" : "\u274C"}</li>)
);
}

export default TaskList;