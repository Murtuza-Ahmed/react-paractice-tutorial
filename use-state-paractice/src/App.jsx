import React, { useState } from "react";

const a = [
  { number: 1 },
  { number: 2 },
  { number: 3 },
  { number: 4 },
  { number: 5 },
  { number: 6 },
  { number: 7 },
  { number: 8 },
  { number: 9 },
  { number: 10 },
];

const getSum = (arr) => {
  console.log("Arr", arr);
  let result = 0;
  console.log("Result", result);
  arr.forEach((item) => {
    console.log("Item", item);
    result += item.number;
    console.log("Result-2", result);
  });
  console.log("called");
  return result;
};

const App = () => {
  const [count, updateCount] = useState(getSum(a));

  function HandleClick() {
    // updateCount(count + 1);
    updateCount((prevCount) => prevCount + 1);
    updateCount((prevCount) => prevCount + 1);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={HandleClick}>Click Me</button>
    </div>
  );
};
export default App;
