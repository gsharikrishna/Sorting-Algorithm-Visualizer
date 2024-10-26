import React, { useState, useEffect } from 'react';
import './Sorting.css';

const BubbleSort = () => {
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

  const bubbleSort = async () => {
    setIsSorting(true);
    let arr = array.slice();
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          setArray([...arr]);
          await new Promise((resolve) => setTimeout(resolve, 50));
        }
      }
    }
    setIsSorting(false);
  };

  return (
    <div className="sort-container bubble-sort">
      <div className="array-container">
        {array.map((value, idx) => (
          <div className="array-bar" key={idx} style={{ height: `${value}px` }}>
            <span className="bar-value">{value}</span>
          </div>
        ))}
      </div>
      <br></br>
      <button onClick={resetArray} disabled={isSorting}>Generate New Array</button>
      <button onClick={bubbleSort} disabled={isSorting}>Sort</button>
    </div>
  );
};

export default BubbleSort;
