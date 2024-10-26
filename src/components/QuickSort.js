import React, { useState, useEffect } from 'react';
import './Sorting.css';

const QuickSort = () => {
  const [array, setArray] = useState([]);
  const [isSorting, setIsSorting] = useState(false);

  useEffect(() => {
    resetArray();
  }, []);

  const resetArray = () => {
    if (isSorting) return;
    const array = [];
    for (let i = 0; i < 40; i++) {
      array.push(Math.floor(Math.random() * 500) + 5);
    }
    setArray(array);
  };

  const quickSort = async () => {
    setIsSorting(true);
    let arr = array.slice();
    await quickSortHelper(arr, 0, arr.length - 1);
    setIsSorting(false);
  };

  const quickSortHelper = async (arr, low, high) => {
    if (low < high) {
      let pi = await partition(arr, low, high);
      await quickSortHelper(arr, low, pi - 1);
      await quickSortHelper(arr, pi + 1, high);
    }
  };

  const partition = async (arr, low, high) => {
    let pivot = arr[high];
    let i = low - 1;
    for (let j = low; j <= high - 1; j++) {
      if (arr[j] < pivot) {
        i++;
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        setArray([...arr]);
        await new Promise((resolve) => setTimeout(resolve, 50));
      }
    }
    let temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    setArray([...arr]);
    await new Promise((resolve) => setTimeout(resolve, 50));
    return i + 1;
  };

  return (
    <div className="sort-container quick-sort">
      <div className="array-container">
        {array.map((value, idx) => (
          <div className="array-bar" key={idx} style={{ height: `${value}px` }}>
            <span className="bar-value">{value}</span>
          </div>
        ))}
      </div>
      <br></br>
      <button onClick={resetArray} disabled={isSorting}>Generate New Array</button>
      <button onClick={quickSort} disabled={isSorting}>Sort</button>
    </div>
  );
};

export default QuickSort;
