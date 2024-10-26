// src/App.js
import React, { useState } from "react";
import "./App.css";
import BubbleSort from "./components/BubbleSort";
import SelectionSort from "./components/SelectionSort";
import InsertionSort from "./components/InsertionSort";
import QuickSort from "./components/QuickSort";
import MergeSort from "./components/MergeSort";
import TimeComplexities from "./components/TimeComplexities"; // Import the new component

function App() {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("BubbleSort");
  const [speed, setSpeed] = useState(50); // Default speed in milliseconds

  const handleAlgorithmChange = (event) => {
    setSelectedAlgorithm(event.target.value);
  };

  const renderAlgorithm = () => {
    const algorithmProps = { speed }; // Passing speed as a prop to each component
    switch (selectedAlgorithm) {
      case "BubbleSort":
        return <BubbleSort {...algorithmProps} />;
      case "SelectionSort":
        return <SelectionSort {...algorithmProps} />;
      case "InsertionSort":
        return <InsertionSort {...algorithmProps} />;
      case "QuickSort":
        return <QuickSort {...algorithmProps} />;
      case "MergeSort":
        return <MergeSort {...algorithmProps} />;
      default:
        return <BubbleSort {...algorithmProps} />;
    }
  };

  return (
    <div className="App">
      <h1 style={{ color: 'red' }}>Sorting Algorithm Visualizer</h1>
      <div className="controls">
        <div className="dropdown-container">
          <label>Algorithm:</label>
          <select value={selectedAlgorithm} onChange={handleAlgorithmChange}>
            <option value="BubbleSort">Bubble Sort</option>
            <option value="SelectionSort">Selection Sort</option>
            <option value="InsertionSort">Insertion Sort</option>
            <option value="QuickSort">Quick Sort</option>
            <option value="MergeSort">Merge Sort</option>
          </select>
        </div>
      </div>
      <div className="algorithm-container">{renderAlgorithm()}</div>
      <TimeComplexities selectedAlgorithm={selectedAlgorithm} /> {/* Include the TimeComplexities component */}
    </div>
  );
}

export default App;
