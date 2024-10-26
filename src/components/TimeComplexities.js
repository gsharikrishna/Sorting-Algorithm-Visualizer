// src/components/TimeComplexities.js
import React from 'react';

const timeComplexities = {
  BubbleSort: {
    best: 'O(n)',
    average: 'O(n^2)',
    worst: 'O(n^2)',
  },
  SelectionSort: {
    best: 'O(n^2)',
    average: 'O(n^2)',
    worst: 'O(n^2)',
  },
  InsertionSort: {
    best: 'O(n)',
    average: 'O(n^2)',
    worst: 'O(n^2)',
  },
  QuickSort: {
    best: 'O(n log n)',
    average: 'O(n log n)',
    worst: 'O(n^2)',
  },
  MergeSort: {
    best: 'O(n log n)',
    average: 'O(n log n)',
    worst: 'O(n log n)',
  },
};

const TimeComplexities = ({ selectedAlgorithm }) => {
  const complexities = timeComplexities[selectedAlgorithm];

  return (
    <div className="time-complexities">
      <h2>Time Complexities</h2>
      <ul>
        <li>Best Case: {complexities.best}</li>
        <li>Average Case: {complexities.average}</li>
        <li>Worst Case: {complexities.worst}</li>
      </ul>
    </div>
  );
};

export default TimeComplexities;
