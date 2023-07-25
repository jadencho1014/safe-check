import React, { useState } from "react";
import "./App.css";
import SafetyItemList from "./components/SafetyItemList";

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Wear a hard hat", completed: false },
    { id: 2, text: "Use safety goggles", completed: false },
    { id: 3, text: "Wear high visibility clothing", completed: false },
    { id: 4, text: "Use gloves when necessary", completed: false },
    { id: 5, text: "Use proper footwear", completed: false },
    { id: 6, text: "Ensure scaffolding is secure", completed: false },
    {
      id: 7,
      text: "Always use safety harnesses when working at heights",
      completed: false,
    },
    { id: 8, text: "Keep work areas clear of hazards", completed: false },
    {
      id: 9,
      text: "Do not operate machinery without proper training",
      completed: false,
    },
    { id: 10, text: "Report all accidents and near-misses", completed: false },
    {
      id: 11,
      text: "Ensure all equipment is properly maintained",
      completed: false,
    },
    {
      id: 12,
      text: "Always use ear protection in noisy environments",
      completed: false,
    },
    {
      id: 13,
      text: "Never work under the influence of alcohol or drugs",
      completed: false,
    },
    { id: 14, text: "Follow all posted safety procedures", completed: false },
    { id: 15, text: "Never remove safety guards on tools", completed: false },
    {
      id: 16,
      text: "Always use dust masks in dusty environments",
      completed: false,
    },
    {
      id: 17,
      text: "Use respirators when working with toxic substances",
      completed: false,
    },
    {
      id: 18,
      text: "Use fall arrest systems for fall protection",
      completed: false,
    },
    { id: 19, text: "Always check ladders before use", completed: false },
    { id: 20, text: "Never overload electrical outlets", completed: false },
    {
      id: 21,
      text: "Ensure proper ventilation in work area",
      completed: false,
    },
    { id: 22, text: "Handle all chemicals with care", completed: false },
    { id: 23, text: "Store flammable materials safely", completed: false },
    {
      id: 24,
      text: "Maintain a clean and organized work area",
      completed: false,
    },
    { id: 25, text: "Never block fire exits or equipment", completed: false },
    { id: 26, text: "Always wash hands before eating", completed: false },
    { id: 27, text: "Never smoke in non-designated areas", completed: false },
    {
      id: 28,
      text: "Stay hydrated, especially in hot conditions",
      completed: false,
    },
    { id: 29, text: "Always use the right tool for the job", completed: false },
    { id: 30, text: "Dispose of waste materials properly", completed: false },
    {
      id: 31,
      text: "Always lift heavy items properly to avoid injury",
      completed: false,
    },
    { id: 32, text: "Never work in unsafe conditions", completed: false },
    {
      id: 33,
      text: "Ensure all workers have received safety training",
      completed: false,
    },
    {
      id: 34,
      text: "Report any observed safety hazards immediately",
      completed: false,
    },
    {
      id: 35,
      text: "Wear a face shield when welding or cutting",
      completed: false,
    },
    { id: 36, text: "Never bypass safety devices", completed: false },
    {
      id: 37,
      text: "Ensure all safety equipment is in good working order",
      completed: false,
    },
    { id: 38, text: "Participate in all safety drills", completed: false },
    {
      id: 39,
      text: "Understand emergency evacuation routes",
      completed: false,
    },
    {
      id: 40,
      text: "Avoid distractions when operating machinery",
      completed: false,
    },
    { id: 41, text: "Use caution when handling sharp tools", completed: false },
    {
      id: 42,
      text: "Ensure all workers are wearing proper PPE",
      completed: false,
    },
    { id: 43, text: "Follow lockout/tagout procedures", completed: false },
    {
      id: 44,
      text: "Inspect equipment for wear and tear before use",
      completed: false,
    },
    {
      id: 45,
      text: "Do not use tools or equipment you're unfamiliar with",
      completed: false,
    },
    {
      id: 46,
      text: "Always have a first aid kit readily available",
      completed: false,
    },
    {
      id: 47,
      text: "Avoid loose clothing and jewelry that can get caught in machinery",
      completed: false,
    },
    {
      id: 48,
      text: "Keep walkways and stairways clear of obstacles",
      completed: false,
    },
    {
      id: 49,
      text: "Know the location of fire extinguishers and how to use them",
      completed: false,
    },
    {
      id: 50,
      text: "Regularly check and replace worn-out equipment",
      completed: false,
    },
  ]);

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  };

  const uncheckedTasksCount = tasks.filter((task) => !task.completed).length;

  return (
    <div className="App">
      <h1>Safe-Check</h1>
      <div className="safety-list">
        <h2>Number of Unchecked Safety Precautions: {uncheckedTasksCount}</h2>
        <SafetyItemList tasks={tasks} toggleTask={toggleTask} />
      </div>
    </div>
  );
};

export default App;
