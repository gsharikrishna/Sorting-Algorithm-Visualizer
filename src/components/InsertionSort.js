import React, { useState, useEffect } from 'react';
import './Sorting.css';

const InsertionSort = () => {
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

  const insertionSort = async () => {
    setIsSorting(true);
    let arr = array.slice();
    let n = arr.length;
    for (let i = 1; i < n; i++) {
      let key = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j = j - 1;
        setArray([...arr]);
        await new Promise((resolve) => setTimeout(resolve, 50));
      }
      arr[j + 1] = key;
      setArray([...arr]);
      await new Promise((resolve) => setTimeout(resolve, 50));
    }
    setIsSorting(false);
  };

  return (
    <div className="sort-container insertion-sort">
      <div className="array-container">
        {array.map((value, idx) => (
          <div className="array-bar" key={idx} style={{ height: `${value}px` }}>
            <span className="bar-value">{value}</span>
          </div>
        ))}
      </div>
      <br></br>
      <button onClick={resetArray} disabled={isSorting}>Generate New Array</button>
      <button onClick={insertionSort} disabled={isSorting}>Sort</button>
    </div>
  );
};

export default InsertionSort;
