import React, { useState, useEffect } from 'react';
import './Sorting.css';

const MergeSort = () => {
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

  const mergeSort = async () => {
    setIsSorting(true);
    let arr = array.slice();
    await mergeSortHelper(arr, 0, arr.length - 1);
    setIsSorting(false);
  };

  const mergeSortHelper = async (arr, left, right) => {
    if (left < right) {
      const middle = Math.floor((left + right) / 2);
      await mergeSortHelper(arr, left, middle);
      await mergeSortHelper(arr, middle + 1, right);
      await merge(arr, left, middle, right);
    }
  };

  const merge = async (arr, left, middle, right) => {
    const n1 = middle - left + 1;
    const n2 = right - middle;
    const leftArray = new Array(n1);
    const rightArray = new Array(n2);
    for (let i = 0; i < n1; i++) {
      leftArray[i] = arr[left + i];
    }
    for (let j = 0; j < n2; j++) {
      rightArray[j] = arr[middle + 1 + j];
    }
    let i = 0,
      j = 0,
      k = left;
    while (i < n1 && j < n2) {
      if (leftArray[i] <= rightArray[j]) {
        arr[k] = leftArray[i];
        i++;
      } else {
        arr[k] = rightArray[j];
        j++;
      }
      setArray([...arr]);
      await new Promise((resolve) => setTimeout(resolve, 50));
      k++;
    }
    while (i < n1) {
      arr[k] = leftArray[i];
      i++;
      k++;
      setArray([...arr]);
      await new Promise((resolve) => setTimeout(resolve, 50));
    }
    while (j < n2) {
      arr[k] = rightArray[j];
      j++;
      k++;
      setArray([...arr]);
      await new Promise((resolve) => setTimeout(resolve, 50));
    }
  };

  return (
    <div className="sort-container merge-sort">
      <div className="array-container">
        {array.map((value, idx) => (
          <div className="array-bar" key={idx} style={{ height: `${value}px` }}>
            <span className="bar-value">{value}</span>
          </div>
        ))}
      </div>
      <br></br>
      <button onClick={resetArray} disabled={isSorting}>Generate New Array</button>
      <button onClick={mergeSort} disabled={isSorting}>Sort</button>
    </div>
  );
};

export default MergeSort;
