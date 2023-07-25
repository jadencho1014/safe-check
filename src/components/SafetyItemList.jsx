import React from "react";
import SafetyItem from "./SafetyItem";

const SafetyItemList = ({ tasks, toggleTask }) => (
  <div>
    {tasks.map((task) => (
      <SafetyItem key={task.id} task={task} toggleTask={toggleTask} />
    ))}
  </div>
);

export default SafetyItemList;
