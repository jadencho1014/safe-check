import React from "react";

const SafetyItem = ({ task, toggleTask }) => (
  <div className="safety-row">
    <input
      type="checkbox"
      checked={task.completed}
      onChange={() => toggleTask(task.id)}
    />
    <label>{task.text}</label>
  </div>
);

export default SafetyItem;
