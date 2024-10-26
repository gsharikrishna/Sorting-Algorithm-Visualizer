import React, { useState, useEffect } from 'react';
import './Sorting.css';

const SelectionSort = () => {
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

  const selectionSort = async () => {
    setIsSorting(true);
    let arr = array.slice();
    let n = arr.length;
    for (let i = 0; i < n; i++) {
      let minIdx = i;
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIdx]) {
          minIdx = j;
        }
      }
      if (minIdx !== i) {
        let temp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp;
        setArray([...arr]);
        await new Promise((resolve) => setTimeout(resolve, 50));
      }
    }
    setIsSorting(false);
  };

  return (
    <div className="sort-container selection-sort">
      <div className="array-container">
        {array.map((value, idx) => (
          <div className="array-bar" key={idx} style={{ height: `${value}px` }}>
            <span className="bar-value">{value}</span>
          </div>
        ))}
      </div>
      <br></br>
      <button onClick={resetArray} disabled={isSorting}>Generate New Array</button>
      <button onClick={selectionSort} disabled={isSorting}>Sort</button>
    </div>
  );
};

export default SelectionSort;
